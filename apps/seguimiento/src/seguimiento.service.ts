import { Injectable } from '@nestjs/common';

@Injectable()
export class SeguimientoService {
  getHello(): string {
    return 'Hello World!';
  }
}
