
// NPM Modules
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('movie')
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    director: string;

    @Column()
    year: number;

    @Column()
    rating: number;

    @Column()
    genre: string;

    @Column()
    release: Date;
}