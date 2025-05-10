import { Module } from '@nestjs/common';
import { ContractModificationsService } from './contract-modifications.service';
import { ContractModificationsController } from './contract-modifications.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ContractModificationsController],
  providers: [ContractModificationsService, PrismaService],
})
export class ContractModificationsModule {}
