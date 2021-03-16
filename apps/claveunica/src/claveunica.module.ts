import { Module } from '@nestjs/common';
import { ClaveunicaController } from './claveunica.controller';
import { ClaveunicaService } from './claveunica.service';

@Module({
  imports: [],
  controllers: [ClaveunicaController],
  providers: [ClaveunicaService],
})
export class ClaveunicaModule {}
