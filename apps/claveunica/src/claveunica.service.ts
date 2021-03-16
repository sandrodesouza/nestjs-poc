import { Injectable } from '@nestjs/common';

@Injectable()
export class ClaveunicaService {
  getHello(): string {
    return 'Hello World!';
  }
}
