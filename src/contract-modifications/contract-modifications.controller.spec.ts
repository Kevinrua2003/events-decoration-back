import { Test, TestingModule } from '@nestjs/testing';
import { ContractModificationsController } from './contract-modifications.controller';
import { ContractModificationsService } from './contract-modifications.service';

describe('ContractModificationsController', () => {
  let controller: ContractModificationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContractModificationsController],
      providers: [ContractModificationsService],
    }).compile();

    controller = module.get<ContractModificationsController>(ContractModificationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
