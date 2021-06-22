import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Instruction } from './entity/instruction.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Instruction)
    private instructionRepository: Repository<Instruction>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getInstructions() {
    const instruction = await this.instructionRepository.find({relations: ["contact_details"]});
    return instruction;
  }

  async getInstructionsAfterArrival() {
    const instructionsAfter = await this.instructionRepository.find({relations: ["contact_details"]});
    return instructionsAfter;
  }

  async getInstructionsStayInPoland() {
    const instructionsStay = await this.instructionRepository.find({relations: ["contact_details"]});
    return instructionsStay;
  }

  async getInstructionById(id) {
    const instructionId = this.instructionRepository.findOne(id, {relations: ["contact_details"]});
    return instructionId;
  }
}
