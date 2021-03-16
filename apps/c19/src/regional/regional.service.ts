import { EpivigilaService } from '@app/epivigila';
import { Injectable } from '@nestjs/common';
import { CreateRegionalDto } from './dto/create-regional.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Regional } from './entities/regional.entity';
import { RegionalFamiliar } from './entities/regional-familiar.entity';
import { validate } from 'class-validator';

@Injectable()
export class RegionalService {
  constructor(
    private epivigilaService: EpivigilaService,
    @InjectRepository(Regional)
    private readonly regionalRepository: Repository<Regional>,
  ) {}

  async create(createRegionalDto: CreateRegionalDto) {
    let regional = new Regional(createRegionalDto);
    regional.familiares = [];
    createRegionalDto?.familiares.map((fam) => {
      regional.familiares.push(new RegionalFamiliar(fam));
    });
    regional.isActive = this.epivigilaService.checkCuarentena('tuvieja');
    // console.log(regional);

    const errors = await validate(regional);
    if (errors.length > 0) {
      console.error(errors);
      throw new Error(`Validation failed!`);
    } else {
      return await this.regionalRepository.save(regional);
    }
  }
}
