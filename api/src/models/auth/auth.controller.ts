import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PublicProp } from 'src/functions/public-rote.decorator';
import { JwtAccessToken } from './jwt-token.dto';
import { User } from '../users/users.entity';
import { LocalAuthGuard } from './local-auth/local-auth.guards';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ){}

    @PublicProp()
    @UseGuards(LocalAuthGuard)
    @Post('login')

    async login(@Request() req): Promise<JwtAccessToken> {
        const reqValidate = (await req) as {user:User};
        const user = reqValidate.user;


        return this.authService.login(user);
    }
}
