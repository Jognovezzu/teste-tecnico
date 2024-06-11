import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

export const PublicClass = (): ClassDecorator =>
    SetMetadata(IS_PUBLIC_KEY, true);

export const PublicProp = (): PropertyDecorator =>
    SetMetadata(IS_PUBLIC_KEY, true);
