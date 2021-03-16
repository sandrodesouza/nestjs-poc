import { Entity, Column, OneToMany } from 'typeorm';
import { Forms } from '../../common/forms.interface';
import { CreateRegionalDto } from '../dto/create-regional.dto';
import { RegionalFamiliar } from './regional-familiar.entity';
import {
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
} from 'class-validator';

@Entity()
export class Regional extends Forms {
  constructor(createRegionalDto: CreateRegionalDto) {
    super();
    this.firstName = createRegionalDto?.apellidopaterno;
    this.lastName = createRegionalDto?.apellidopaterno;
    this.names = createRegionalDto?.names;
    this.profile = createRegionalDto?.profile;
  }

  @Column()
  @Length(10, 20)
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column('simple-json')
  profile: { name: string; nickname: string };

  @Column('simple-array')
  names: string[];

  @OneToMany(
    () => RegionalFamiliar,
    (regionalFamiliar) => regionalFamiliar.regional,
    {
      eager: true,
      cascade: true,
    },
  )
  familiares: RegionalFamiliar[];
}
