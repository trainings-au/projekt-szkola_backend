import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor() {}

  getHello(): string {
    return 'Hello World!';
  }

  getInstructionsAfterArrival() {
    return 'test';
  }

  getInstructionsStayInPoland() {
    return 'test';
  }

  getInstructionById(id) {
    return 'test';
  }
}