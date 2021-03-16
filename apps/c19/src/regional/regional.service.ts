import { EpivigilaService } from '@app/epivigila';
import { Injectable } from '@nestjs/common';
import { CreateRegionalDto } from './dto/create-regional.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Regional } from './entities/regional.entity';

@Injectable()
export class RegionalService {
  constructor(
    private epivigilaService: EpivigilaService,
    @InjectRepository(Regional)
    private readonly regionalRepository: Repository<Regional>,
  ) {}

  async create(createRegionalDto: CreateRegionalDto) {
    console.log(await this.regionalRepository.find())
    let regional = new Regional();
    regional.firstName = createRegionalDto.apellidopaterno;
    regional.isActive = this.epivigilaService.checkCuarentena('tuvieja');
    console.log(regional)
    return this.regionalRepository.save(regional);
  }
}
