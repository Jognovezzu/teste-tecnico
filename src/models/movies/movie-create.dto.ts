import { IsDate, IsNumber, IsString } from "class-validator"

export class MovieCreateDTO {
    @IsString()
    title: string;

    @IsString()
    director: string;

    @IsNumber()
    year: number;

    @IsNumber()
    rating: number;

    @IsString()
    genre: string;

    @IsDate()
    releaseDate: Date;

}