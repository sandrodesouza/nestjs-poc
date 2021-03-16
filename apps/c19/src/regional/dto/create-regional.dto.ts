import { IsNotEmpty, Length } from 'class-validator';
import { CreateRegionalFamiliarDto } from './create-regional-familiar.dto';

export class CreateRegionalDto {
  @IsNotEmpty()
  @Length(10, 20)
  apellidopaterno: string;

  @IsNotEmpty()
  profile: { name: string; nickname: string };

  @IsNotEmpty()
  names: string[];

  @IsNotEmpty()
  familiares: CreateRegionalFamiliarDto[];
}
