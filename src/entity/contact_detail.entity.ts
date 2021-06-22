import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Instruction } from './instruction.entity';

@Entity()
export class ContactDetail extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  postal_code: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  building_number: string;

  @Column()
  room_number: string;

  @Column()
  phone_number: string;

  @Column()
  opens_at: string;

  @Column()
  closes_at: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  website: string;

  @ManyToMany(() => Instruction, (instruction) => instruction.contact_details, {cascade: true})
  instructions: Instruction[]
}
