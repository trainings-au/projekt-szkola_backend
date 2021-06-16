import { EntityRepository, Repository } from 'typeorm';
import { Instructions } from 'src/entities/instructions.entity';

@EntityRepository(Instructions)
export class InstructionsRepository extends Repository<Instructions> {}