import { Module } from '@nestjs/common';
import { RegionalService } from './regional.service';
import { RegionalController } from './regional.controller';
import { EpivigilaModule } from '@app/epivigila';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Regional } from './entities/regional.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Regional]), EpivigilaModule],
  controllers: [RegionalController],
  providers: [RegionalService],
})
export class RegionalModule {}
