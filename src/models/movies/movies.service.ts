import { Injectable, Type } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions, Repository, FindOneOptions } from "typeorm";
import { Movie } from "./movies.entity";
import { MovieCreateDTO } from "./movie-create.dto";
import { instanceToPlain, plainToInstance } from "class-transformer";

@Injectable()

export class MoviesService {
    constructor(
        @InjectRepository(Movie)
        private movieRepository: Repository<Movie>,
    ){}

    dtoToEntity(entity: Type<any>, data: any): any {
        return plainToInstance(entity, instanceToPlain(data));
    }


    async getAll(): Promise <Movie[]> {
        const options: FindManyOptions<Movie> = {
        order: {
            title: 'ASC',
            }
        };
        return this.movieRepository.find(options);

    }

    async getOne(id: number): Promise<Movie> {
        const options: FindOneOptions<Movie> = {
            where: { id },
        };
        
        const movie = await this.movieRepository.findOne(options);
        if (!movie) {
            throw new Error('Movie not found');
        }
        return movie;
    }

    async update(id: number, movie: Movie): Promise<Movie> {
        if (id == 0) throw new Error('Invalid ID');

        await this.getOne(id);
        await this.movieRepository.update(id, movie);
        return this.getOne(id);
    }

    async create(movie: MovieCreateDTO): Promise<Movie> {
        const movieEntity: Movie = this.dtoToEntity(Movie, movie) as Movie;
        return this.movieRepository.save(movieEntity);
    }

    async delete(id: number): Promise<void> {
        await this.getOne(id);
        await this.movieRepository.delete(id);
    }
}