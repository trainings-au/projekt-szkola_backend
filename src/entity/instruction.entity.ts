import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ContactDetail } from './contact_detail.entity';

@Entity()
export class Instruction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column()
  icon_path: string;

  @ManyToMany(() => ContactDetail, (contactDetail) => contactDetail.instructions)
  @JoinTable()
  contact_details: ContactDetail[];
}
