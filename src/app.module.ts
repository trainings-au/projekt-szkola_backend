import { Module } from '@nestjs/common';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstructionRepository } from './repository/instruction.repository';
import { ContactDetailRepository } from './repository/contact_detail.repository';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    AppModule,
    TypeOrmModule.forFeature([InstructionRepository]),
    TypeOrmModule.forFeature([ContactDetailRepository]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
