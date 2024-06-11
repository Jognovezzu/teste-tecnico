import { HttpStatus } from "@nestjs/common";
import { ApiResponseOptions } from "@nestjs/swagger";

export class SwaggerMovieResponse {
    static defaultMovie = {
        id: "Number",
        title: "String",
        director: "String",
        year: "Number",
        rating: "Number",
        genre: "String",
        release: "Date",

    };

    static getAllMovies: ApiResponseOptions = {
        status: HttpStatus.OK,
        schema: {
            default: [
                this.defaultMovie,
                this.defaultMovie,
                this.defaultMovie,
            ],
        },
    };

    static createMovie: ApiResponseOptions = {
        status: HttpStatus.CREATED,
        schema: {
            default:{
                id: "Number",
                title: "String",
                director: "String",
                year: "Number",
                rating: "Number",
                genre: "String",
                release: "Date",
            },
        },
    };

    static getMovie: ApiResponseOptions = {
        status: HttpStatus.OK,
        schema: {
            default: this.defaultMovie,
        },
    };

    static updateMovie: ApiResponseOptions = {
        status: HttpStatus.OK,
        schema: {
            default: this.defaultMovie,
        },
    };

    static deleteMovie: ApiResponseOptions = {
        status: HttpStatus.NO_CONTENT,
    };

    static badRequest: ApiResponseOptions = {
        status: HttpStatus.BAD_REQUEST,
        schema: {
            default: {
                statusCode: 400,
                message: ['{instruction for the problem parameter}, ...'],
                error: 'Bad Request',
            },
        },
    };
}