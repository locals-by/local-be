import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;
}
