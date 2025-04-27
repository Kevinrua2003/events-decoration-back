import { Module } from '@nestjs/common';
import { ContractModificationsService } from './contract-modifications.service';
import { ContractModificationsController } from './contract-modifications.controller';

@Module({
  controllers: [ContractModificationsController],
  providers: [ContractModificationsService],
})
export class ContractModificationsModule {}
