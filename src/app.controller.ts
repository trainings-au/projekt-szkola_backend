import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/instructions')
  getInstruction() {
    return this.appService.getInstructions();
  }

  @Get('/instructions-after-arrival')
  getInstructionsAfterArrival() {
    return this.appService.getInstructionsAfterArrival();
  }

  @Get('/instructions-stay-in-poland')
  getInstructionsStayInPoland() {
    return this.appService.getInstructionsStayInPoland();
  }

  @Get('/instructions/:id')
  getInstructionById(@Param('id') id) {
    return this.appService.getInstructionById(id);
  }
}
