import { Body, Controller, Get, Patch, Post, Delete, UseGuards } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { Movie } from "./movie.entity";
import { MovieCreateDTO } from "./movie-create.dto";
import { JwtAuthGuard } from "../auth/jwt.strategy/auth.guard";


@Controller('movie')
export class MovieController {
    constructor (
        private readonly movieService: MovieService
    ) {}   
    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(): Promise<Movie[]> {
        return this.movieService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOne(id: number): Promise<Movie> {
        return this.movieService.getOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() data: MovieCreateDTO): Promise<Movie> {
        return this.movieService.create(data);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async update(id: number, @Body() data: Movie): Promise<Movie> {
        return this.movieService.update(id, data);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(id: number): Promise<void> {
        return this.movieService.delete(id);
    }
    
}