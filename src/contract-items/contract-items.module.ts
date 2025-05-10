import { Module } from '@nestjs/common';
import { ContractItemsService } from './contract-items.service';
import { ContractItemsController } from './contract-items.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ContractItemsController],
  providers: [ContractItemsService, PrismaService],
})
export class ContractItemsModule {}
