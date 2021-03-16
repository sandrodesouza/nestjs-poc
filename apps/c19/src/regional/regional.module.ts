import { Module } from '@nestjs/common';
import { RegionalService } from './regional.service';
import { RegionalController } from './regional.controller';
import { EpivigilaModule } from '@app/epivigila';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Regional } from './entities/regional.entity';
import { RegionalFamiliar } from './entities/regional-familiar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Regional, RegionalFamiliar]), EpivigilaModule],
  controllers: [RegionalController],
  providers: [RegionalService],
})
export class RegionalModule {}
