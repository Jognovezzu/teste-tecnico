import { IsNumber } from "class-validator";
import { Regex } from "src/constant/regex.constant";
import { ValidateRegex } from "src/functions/regex-validate.decorator";

export type UserValidated = {
    id: number;
    name: string;
    email:string;
}
export class LoginValidateDto {
    @IsNumber()
    id: number;

    @ValidateRegex(Regex.PASSWORD)
    password: string;
}