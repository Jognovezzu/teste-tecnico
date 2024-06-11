import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}


    getOneByEmail(email: string): Promise<User> {
        const options: FindOneOptions<User> = {
            where: { email },
        };
        return this.userRepository.findOne(options);
    }

    getOne(id: number): Promise<User> {
        const options: FindOneOptions<User> = {
            where: { id },
        };
        return this.userRepository.findOne(options);
    }

    async validadeEmail(email:string): Promise<void> {
        const options: FindOneOptions<User> = {where: {email: email} };
        const exist = await this.userRepository.findOne(options);
        if (exist == null) throw new Error ("User or Password has incorrect.")

            
    }
}
