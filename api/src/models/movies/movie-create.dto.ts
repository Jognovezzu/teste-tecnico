
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator"

export class MovieCreateDTO {
    @IsString()
    title: string;

    @IsString()
    director: string;

    @IsNumber()
    year: number;

    @IsNumber()
    @IsOptional()
    rating: number;

    @IsString()
    genre: string;

    @IsDate()
    release: Date;

}