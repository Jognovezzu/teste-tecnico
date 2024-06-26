import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { SwaggerModule } from "@nestjs/swagger";
import { SwaggerConfig } from "./config/swagger.config";

async function application(): Promise<void> {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter(),
    );

    const port = process.env.PORT ? Number(process.env.PORT) : 8085;

    const config = SwaggerConfig

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document, {
        swaggerOptions: {
            tagsSorter: "alpha",
        },
    });

    await app.listen(port, "0.0.0.0");

}

application().catch((error) => console.log(error));