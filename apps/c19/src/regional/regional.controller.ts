import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegionalService } from './regional.service';
import { CreateRegionalDto } from './dto/create-regional.dto';

@Controller('regional')
export class RegionalController {
  constructor(private readonly regionalService: RegionalService) {}

  @Post()
  create(@Body() createRegionalDto: CreateRegionalDto) {
    return this.regionalService.create(createRegionalDto);
  }


}
