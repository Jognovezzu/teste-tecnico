import { UserValidated } from "./auth.validate.user.dto";

/**
 * Response type of login request
 */
export type JwtAccessToken = {
    access_token: {
        token: string;
        expires_in: string;
    };
    user: UserValidated;
};

/**
 * Type used to manipulate payload data used in jwt token
 */
export type Payload = {
    sub: number;
    email: string;
};