import { Controller, applyDecorators } from "@nestjs/common";
import { ApiBody, ApiBodyOptions, ApiOperation, ApiResponse, ApiResponseOptions, ApiTags } from "@nestjs/swagger";
import { ApiQueryPaginate } from "./query.paginate.decorator";

export const ControllerAndSwagger = (name:string): ClassDecorator => {
    const controllerDecorator = Controller(name);
    const apiTagsDecorator = ApiTags(name);

    return (target: object) => {
        controllerDecorator(target as Function);
        apiTagsDecorator(target as Function);
    };
};

export const ApiRoutesSwagger = (data: {
    summary: string;
    apiResponses: ApiResponseOptions[];
    queryPaginate?: boolean;
    bodyOptions?: ApiBodyOptions;
}): MethodDecorator => {
    const { summary, apiResponses, queryPaginate, bodyOptions } = data;
    const decorators = [
        ApiOperation({ summary }),
        ...apiResponses.map((apiResponse) => ApiResponse(apiResponse)),
    ];

    if (queryPaginate) decorators.push(ApiQueryPaginate());

    if (bodyOptions) decorators.push(ApiBody(bodyOptions));

    return applyDecorators(...decorators);
};