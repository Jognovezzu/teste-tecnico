import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './models/movies/movie.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfigOptions } from './config/database.config';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './models/auth/auth.module';
import { UserModule } from './models/users/users.module';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisOptions } from './config/redis.config';

@Module({
  imports: [TypeOrmModule.forRootAsync(dbConfigOptions),
    ConfigModule.forRoot({
      envFilePath: '.security.env',
    }),
    CacheModule.registerAsync(RedisOptions),
    MovieModule,
    AuthModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
