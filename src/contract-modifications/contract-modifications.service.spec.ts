import { Test, TestingModule } from '@nestjs/testing';
import { ContractModificationsService } from './contract-modifications.service';

describe('ContractModificationsService', () => {
  let service: ContractModificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContractModificationsService],
    }).compile();

    service = module.get<ContractModificationsService>(ContractModificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
