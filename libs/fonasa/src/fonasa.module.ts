import { Module } from '@nestjs/common';
import { FonasaService } from './fonasa.service';

@Module({
  providers: [FonasaService],
  exports: [FonasaService],
})
export class FonasaModule {}
