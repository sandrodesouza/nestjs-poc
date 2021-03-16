import { Controller, Get } from '@nestjs/common';
import { FormsService } from './forms.service';

@Controller()
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Get()
  getHello(): string {
    return this.formsService.getHello();
  }
}
