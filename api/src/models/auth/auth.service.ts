/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/models/users/users.service';
import { LoginValidateDto, UserValidated } from './auth.validate.user.dto';
import { JwtAccessToken, Payload } from './jwt-token.dto';
import { JwtService } from '@nestjs/jwt';
import { MyHash } from 'src/functions/hash.function';
import { User } from 'src/models/users/users.entity';
import { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ){}

    

    createAcessToken(payload:Payload): JwtAccessToken {
        const _tmpToken = this.jwtService.sign(payload, {
            expiresIn: '10h',
            jwtid: 'access'
        })
    
        const _tmpPayload: JwtPayload = jwtDecode<JwtPayload>(_tmpToken)
    
        const expires_in = _tmpPayload.exp
            ? new Date(_tmpPayload.exp * 1000).toString()
            : new Date().toString();
    
        return <JwtAccessToken>{
            access_token: {
                token: _tmpToken,
                expires_in,
            },
        };
    }

    async validateUser(email:string, pass: string): Promise<UserValidated> {
        try{
            const user = await this.userService.getOneByEmail(email);

            if (user && MyHash.compare(pass,user.password)) {
                const response = <UserValidated> {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                };
                return response;

                }

            return null;
            } catch (error) {
                throw new Error("User or Password has incorrect.");
            }
    }

    async userExist(email:string): Promise<boolean> {
        try{
            const user = await this.userService.getOneByEmail(email);

            if (user) return true;

            throw new Error("User or Password has incorrect.");
        } catch (error) {
            throw new Error("User or Password has incorrect.");
        }
    }

    /**
     * Auth user and return access token;
     * @param UserValidated user data;
     * @return jwt access token;
     */
    login(user: UserValidated): JwtAccessToken {
        const payload = { email:user.email, sub: user.id};

        const response = this.createAcessToken(payload);
        response.user = user;

        return response;
    }

    async validateLogin(data: LoginValidateDto): Promise<boolean> {
        const user: User = await this.userService.getOne(data.id);

        return user && MyHash.compare(data.password, user.password);
    }


}
