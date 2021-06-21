import { EntityRepository, Repository } from 'typeorm';
import { ContactDetail } from 'src/entity/contact_detail.entity';

@EntityRepository(ContactDetail)
export class ContactDetailRepository extends Repository<ContactDetail> {}