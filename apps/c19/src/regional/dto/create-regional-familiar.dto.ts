import { IsNotEmpty } from 'class-validator';

export class CreateRegionalFamiliarDto {
  @IsNotEmpty()
  apellidopaterno: string;

  @IsNotEmpty()
  profile: { name: string; nickname: string };

 
}
