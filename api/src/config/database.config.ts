import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from '@nestjs/config';
import { Movie } from "src/models/movies/movie.entity";


export const dbConfigOptions: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    name: 'default',
    useFactory: (configService: ConfigService): any => ({
        type: 'postgres',
        url: configService.get<string>('DB_POSTGRES_URL'),
        synchronize: false,
        schema: configService.get<string>('DB_POSTGRES_SCHEMA'),
        entities: [
            Movie
        ],
    }),
};
        