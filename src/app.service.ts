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
    const instruction = await this.instructionRepository.find();
    return instruction;
  }

  async getInstructionsAfterArrival() {
    const instructionsAfter = await this.instructionRepository.find();
    return instructionsAfter;
  }

  async getInstructionsStayInPoland() {
    const instructionsStay = await this.instructionRepository.find();
    return instructionsStay;
  }

  async getInstructionById(id) {
    const instructionId = await this.instructionRepository.findOne(id);
    return instructionId;
  }
}
