import { Controller, Get } from '@nestjs/common';
import { ClaveunicaService } from './claveunica.service';

@Controller()
export class ClaveunicaController {
  constructor(private readonly claveunicaService: ClaveunicaService) {}

  @Get()
  getHello(): string {
    return this.claveunicaService.getHello();
  }
}
