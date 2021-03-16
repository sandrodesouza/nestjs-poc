import { NestFactory } from '@nestjs/core';
import { SeguimientoModule } from './seguimiento.module';

async function bootstrap() {
  const app = await NestFactory.create(SeguimientoModule);
  await app.listen(3000);
}
bootstrap();
