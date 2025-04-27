import { Module } from '@nestjs/common';
import { ContractItemsService } from './contract-items.service';
import { ContractItemsController } from './contract-items.controller';

@Module({
  controllers: [ContractItemsController],
  providers: [ContractItemsService],
})
export class ContractItemsModule {}
