import { applyDecorators } from '@nestjs/common/decorators';
import { ApiQuery } from '@nestjs/swagger';

export const ApiQueryPaginate = (): PropertyDecorator => {
    return applyDecorators(
        ApiQuery({
            name: 'page',
            required: false,
            type: Number,
        }),
        ApiQuery({
            name: 'take',
            required: false,
            type: Number,
        }),
        ApiQuery({
            name: 'keyword',
            required: false,
            type: String,
        }),
    );
};
