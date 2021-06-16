import { EntityRepository, Repository } from 'typeorm';
import { ContactDetails } from 'src/entities/contact_details.entity';

@EntityRepository(ContactDetails)
export class ContactDetailsRepository extends Repository<ContactDetails> {}