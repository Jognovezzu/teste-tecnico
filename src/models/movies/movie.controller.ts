import { Body, Controller, Get, Patch, Post, Delete } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { Movie } from "./movie.entity";
import { MovieCreateDTO } from "./movie-create.dto";

@Controller('movie')
export class MovieController {
    constructor (
        private readonly movieService: MovieService
    ) {}   

    @Get()
    async getAll(): Promise<Movie[]> {
        return this.movieService.getAll();
    }

    @Get(':id')
    async getOne(id: number): Promise<Movie> {
        return this.movieService.getOne(id);
    }

    @Post()
    async create(@Body() data: MovieCreateDTO): Promise<Movie> {
        return this.movieService.create(data);
    }

    @Patch(':id')
    async update(id: number, @Body() data: Movie): Promise<Movie> {
        return this.movieService.update(id, data);
    }

    @Delete(':id')
    async delete(id: number): Promise<void> {
        return this.movieService.delete(id);
    }
    
}