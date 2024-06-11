
// NPM Modules
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('movie')
export class Movie {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @ApiProperty()
    @Column()
    title: string;

    @Column()
    @ApiProperty()
    director: string;

    @Column()
    @ApiProperty()
    year: number;

    @Column()
    @ApiProperty()
    rating: number;

    @Column()
    @ApiProperty()
    genre: string;

    @Column()
    @ApiProperty()
    release: Date;
}