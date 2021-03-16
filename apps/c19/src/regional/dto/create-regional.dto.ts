import { IsNotEmpty } from 'class-validator';

export class CreateRegionalDto {
    @IsNotEmpty()
    apellidopaterno: string
}
