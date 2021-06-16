import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ContactDetails extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kod_pocztowy: string;

  @Column()
  miasto: string;

  @Column()
  numer_budynku: string;

  @Column()
  numer_pokoju: string;

  @Column()
  numer_telefonu: string;

  @Column()
  godzina_otwarcia: string;

  @Column()
  godzina_zamykania: string;
  
}
