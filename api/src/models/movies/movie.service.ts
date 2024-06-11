import { Inject, Injectable, Type } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions, Repository, FindOneOptions } from "typeorm";
import { Movie } from "./movie.entity";
import { MovieCreateDTO } from "./movie-create.dto";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";

@Injectable()

export class MovieService {
    constructor(
        @InjectRepository(Movie)
        private movieRepository: Repository<Movie>,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ){}

    dtoToEntity(entity: Type<any>, data: any): any {
        return plainToInstance(entity, instanceToPlain(data));
    }


    async getAll(): Promise <Movie[]> {
        const cacheKey = 'movies';
        const cachedItens = await this.cacheManager.get<Movie[]>(cacheKey);
        if (cachedItens) {
            return cachedItens;
        }

        const options: FindManyOptions<Movie> = {
        order: {
            title: 'ASC',
            }
        };
        const movies = this.movieRepository.find(options);
        await this.cacheManager.set(cacheKey, movies, 300);
        return movies;

        

    }

    async getOne(id: number): Promise<Movie> {
        const cacheKey = `movie-${id}`;
        const cachedItem = await this.cacheManager.get<Movie>(cacheKey);
        if (cachedItem) {
            return cachedItem;
        }

        const options: FindOneOptions<Movie> = {
            where: { id },
        };
        
        const movie = await this.movieRepository.findOne(options);
        if (!movie) {
            throw new Error('Movie not found');
        }

        await this.cacheManager.set(cacheKey, movie, 300);

        return movie;
    }

    async update(id: number, movieData: Movie): Promise<Movie> {
        if (id == 0) throw new Error('Invalid ID');
    
        const movie = await this.getOne(id);
        const updatedMovie = { ...movie, ...movieData};
    
        await this.movieRepository.update(id, movie);
        await this.cacheManager.del(`movie-${id}`);
        await this.cacheManager.del('movies');
    
        return updatedMovie as Movie;
    }

    async create(movie: MovieCreateDTO): Promise<Movie> {
        const movieEntity: Movie = this.dtoToEntity(Movie, movie) as Movie;
        
        const newM =  this.movieRepository.save(movieEntity);
        await this.cacheManager.del('movies');
        return newM;
    }

    async delete(id: number): Promise<void> {
        await this.getOne(id);
        await this.movieRepository.delete(id);
        await this.cacheManager.del(`movie-${id}`);
        await this.cacheManager.del('movies');
    }
}