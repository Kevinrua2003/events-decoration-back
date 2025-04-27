import { Test, TestingModule } from '@nestjs/testing';
import { ContractItemsController } from './contract-items.controller';
import { ContractItemsService } from './contract-items.service';

describe('ContractItemsController', () => {
  let controller: ContractItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContractItemsController],
      providers: [ContractItemsService],
    }).compile();

    controller = module.get<ContractItemsController>(ContractItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
