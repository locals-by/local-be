import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { City } from './city.entity';
@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  email: string;

  @Column({ length: 500 })
  firstName: string;

  @Column({ length: 500 })
  lastName: string;

  @OneToOne(type => City)
  @JoinColumn()
  city: City;

  @Column({ length: 500 })
  address: string;

  @Column()
  token: string;
}
