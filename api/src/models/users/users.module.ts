import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    User
  ])],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
