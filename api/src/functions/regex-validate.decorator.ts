import {
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    registerDecorator,
} from 'class-validator';

/**
 * Validator constraint used to create a custom decorator.
 */
@ValidatorConstraint()
class ValidateRegexConstraint implements ValidatorConstraintInterface {
    constructor(private readonly regExp: RegExp) {}
    validate(value: string): boolean | Promise<boolean> {
        return this.regExp.test(value);
    }
    defaultMessage?(validationArguments: ValidationArguments): string {
        return `${validationArguments.property} is not valid`;
    }
}

/**
 * Custom generic decorator to validate regex expressions.
 * @param regExp Regular expression that will be used to validate its related property.
 * @param validationOptions (optional) Additional validation options.
 */
export function ValidateRegex(
    regExp: RegExp,
    validationOptions?: ValidationOptions,
) {
    return function (object: object, propertyName: string): void {
        registerDecorator({
            name: 'ValidateRegex',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: new ValidateRegexConstraint(regExp),
        });
    };
}
