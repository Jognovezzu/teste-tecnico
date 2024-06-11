import { Exclude } from "class-transformer";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";


@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length: 60 })
    name:string;

    @Column({length: 60 })
    name_slug:string;

    @Column({ length: 256 })
    @Index({ unique: true })
    email: string;

    @Column()
    @Exclude({ toPlainOnly: true })
    password: string;
}