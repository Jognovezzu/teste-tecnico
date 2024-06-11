/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from '@nestjs/config';
import { Movie } from "src/models/movies/movie.entity";
import { User } from "src/models/users/users.entity";


export const dbConfigOptions: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    name: 'default',
    useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_POSTGRES_URL'),
        synchronize: false,
        schema: configService.get('POSTGRES_DB_SCHEMA'),
        entities: [
            Movie,
            User,
        ],
    }),
};
        