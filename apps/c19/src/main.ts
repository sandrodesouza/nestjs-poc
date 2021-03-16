import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { C19Module } from './c19.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(C19Module);
  app.use(helmet());
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      // forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
