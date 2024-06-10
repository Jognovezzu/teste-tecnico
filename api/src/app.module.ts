import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './models/movies/movie.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfigOptions } from './config/database.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forRootAsync(dbConfigOptions),
    ConfigModule.forRoot({
      envFilePath: '.security.env',
    }),
    MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
