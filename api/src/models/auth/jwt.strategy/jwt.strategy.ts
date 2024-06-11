/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from "src/config/jwt-token-secret-key.config";
import { Payload } from "../jwt-token.dto";
import { UserValidated } from "../auth.validate.user.dto";
import { AuthService } from "../auth.service";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly authService: AuthService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() ,
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });

}

    async validate(payload: Payload) : Promise<UserValidated>{
        const {sub, email} = payload;


        return await this.authService.userExist(email)
        .then(() =><UserValidated>{ id: sub, email: email });
    }
}
