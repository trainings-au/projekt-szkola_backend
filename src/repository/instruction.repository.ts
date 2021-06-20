import { EntityRepository, Repository } from 'typeorm';
import { Instruction } from 'src/entity/instruction.entity';

@EntityRepository(Instruction)
export class InstructionRepository extends Repository<Instruction> {}