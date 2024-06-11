import { Body, Controller, Get, Patch, Post, Delete, UseGuards, Param, ParseIntPipe } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { Movie } from "./movie.entity";
import { MovieCreateDTO } from "./movie-create.dto";
import { JwtAuthGuard } from "../auth/jwt.strategy/auth.guard";
import { ApiRoutesSwagger } from "src/functions/swagger.controller.decorator";
import { SwaggerMovieRoute } from "src/swagger/swagger.movie.routes.constant";


@Controller('movie')
export class MovieController {
    constructor (
        private readonly movieService: MovieService
    ) {}   
    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiRoutesSwagger(SwaggerMovieRoute.getAll)
    async getAll(): Promise<Movie[]> {
        return this.movieService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    @ApiRoutesSwagger(SwaggerMovieRoute.getOne)
    async getOne(@Param('id', ParseIntPipe) id: number): Promise<Movie> {
        return this.movieService.getOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiRoutesSwagger(SwaggerMovieRoute.create)
    async create(@Body() data: MovieCreateDTO): Promise<Movie> {
        return this.movieService.create(data);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    @ApiRoutesSwagger(SwaggerMovieRoute.update)
    async update(@Param('id', ParseIntPipe) id: number, @Body() data: Movie): Promise<Movie> {
        return this.movieService.update(id, data);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    @ApiRoutesSwagger(SwaggerMovieRoute.delete)
    async delete(id: number): Promise<void> {
        return this.movieService.delete(id);
    }
    
}