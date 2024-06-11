import { DocumentBuilder } from '@nestjs/swagger';

export const SwaggerConfig = new DocumentBuilder()
    .setTitle('Teste Pratico')
    .setDescription('Swagger Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();