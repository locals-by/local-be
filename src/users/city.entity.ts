import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Country } from './country.entity';
@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @OneToOne(type => Country)
  @JoinColumn()
  country: Country;
}
