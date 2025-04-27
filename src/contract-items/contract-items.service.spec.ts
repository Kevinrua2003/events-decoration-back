import { Test, TestingModule } from '@nestjs/testing';
import { ContractItemsService } from './contract-items.service';

describe('ContractItemsService', () => {
  let service: ContractItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContractItemsService],
    }).compile();

    service = module.get<ContractItemsService>(ContractItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
