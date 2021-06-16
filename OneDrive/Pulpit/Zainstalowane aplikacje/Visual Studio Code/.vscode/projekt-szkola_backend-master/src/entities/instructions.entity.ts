import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Instructions extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tytul: string;

  @Column()
  typ: string;

  @Column()
  opis: string;

  @Column()
  ikona: string;

  @PrimaryGeneratedColumn()
  kontakty_id: number;
  
}
