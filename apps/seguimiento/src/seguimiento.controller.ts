import { Controller, Get } from '@nestjs/common';
import { SeguimientoService } from './seguimiento.service';

@Controller()
export class SeguimientoController {
  constructor(private readonly seguimientoService: SeguimientoService) {}

  @Get()
  getHello(): string {
    return this.seguimientoService.getHello();
  }
}
