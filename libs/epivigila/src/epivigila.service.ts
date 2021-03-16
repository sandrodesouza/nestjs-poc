import { Injectable } from '@nestjs/common';

@Injectable()
export class EpivigilaService {
    checkCuarentena(rut: string) {
        return true
    }
}
