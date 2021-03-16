import { Injectable } from '@nestjs/common';

@Injectable()
export class FormsService {
  getHello(): string {
    return 'Hello World!';
  }
}
