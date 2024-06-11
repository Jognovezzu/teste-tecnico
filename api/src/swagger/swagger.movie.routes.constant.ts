import { SwaggerMovieResponse } from "./swagger.movie.res.constant";


export class SwaggerMovieRoute {
    static getAll = {
        summary: 'Get all movies',
        apiResponses: [ 
            SwaggerMovieResponse.getAllMovies,
            SwaggerMovieResponse.badRequest,

        ],
        queryPaginate: false,
    }

    static getOne = {
        summary: 'Get one movie',
        apiResponses: [
            SwaggerMovieResponse.getMovie,
            SwaggerMovieResponse.badRequest,
        ],
        queryPaginate: false,
    }

    static create = {
        summary: 'Create a movie',
        apiResponses: [
            SwaggerMovieResponse.createMovie,
            SwaggerMovieResponse.badRequest,
        ],
        queryPaginate: false,
    }

    static update = {
        summary: 'Update a movie',
        apiResponses: [
            SwaggerMovieResponse.updateMovie,
            SwaggerMovieResponse.badRequest,
        ],
        queryPaginate: false,
    }

    static delete = {
        summary: 'Delete a movie',
        apiResponses: [
            SwaggerMovieResponse.deleteMovie,
            SwaggerMovieResponse.badRequest,
        ],
        queryPaginate: false,
    }
}