import { Injectable } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { Contract } from './entities/contract.entity';

const contracts: Contract[] = [];

@Injectable()
export class ContractsService {
  create(createContractDto: CreateContractDto) {
    const newId = contracts.length ? Math.max(...contracts.map(c => c.id)) + 1 : 1;
    const newContract: Contract = {
      id: newId,
      clientId: createContractDto.clientId,
      eventId: createContractDto.eventId,
      createdAt: createContractDto.createdAt
    };
    contracts.push(newContract);
    return newContract;
  }

  findAll() {
    return contracts;
  }

  findOne(id: number) {
    return contracts.find(contract => contract.id === id) || null;
  }

  update(id: number, updateContractDto: UpdateContractDto) {
    const contract = contracts.find(contract => contract.id === id);
    if (!contract) return null;
    Object.assign(contract, updateContractDto);
    return contract;
  }

  remove(id: number) {
    const index = contracts.findIndex(contract => contract.id === id);
    if (index === -1) return null;
    const removedContract = contracts.splice(index, 1)[0];
    return removedContract;
  }
}
