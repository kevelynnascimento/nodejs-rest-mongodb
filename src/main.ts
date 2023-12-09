import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Configuration } from './configs/env.config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const envs = Configuration.envs();

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Base API')
    .setDescription('Base API using NodeJS, TypeScript and NestJS')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);

  app.enableCors();

  app.enableShutdownHooks();

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(envs.port);
}
bootstrap();
