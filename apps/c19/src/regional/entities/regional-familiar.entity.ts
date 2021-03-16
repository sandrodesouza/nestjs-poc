import { Entity, Column, ManyToOne } from 'typeorm';
import { Forms } from '../../common/forms.interface';
import { CreateRegionalFamiliarDto } from '../dto/create-regional-familiar.dto';
import { Regional } from './regional.entity';

@Entity()
export class RegionalFamiliar extends Forms {

  constructor (fam: CreateRegionalFamiliarDto){
    super()
    this.firstName = fam?.apellidopaterno
    this.lastName = fam?.apellidopaterno
  } 

  @Column()
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @ManyToOne(() => Regional, regional => regional.familiares)
  regional: Regional;

}
