import { Module } from '@nestjs/common';
import { EpivigilaService } from './epivigila.service';

@Module({
  providers: [EpivigilaService],
  exports: [EpivigilaService],
})
export class EpivigilaModule {}
