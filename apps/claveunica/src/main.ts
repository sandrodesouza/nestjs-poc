import { NestFactory } from '@nestjs/core';
import { ClaveunicaModule } from './claveunica.module';

async function bootstrap() {
  const app = await NestFactory.create(ClaveunicaModule);
  await app.listen(3000);
}
bootstrap();
