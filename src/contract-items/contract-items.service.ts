import { Injectable } from '@nestjs/common';
import { CreateContractItemDto } from './dto/create-contract-item.dto';
import { UpdateContractItemDto } from './dto/update-contract-item.dto';
import { ContractItem } from './entities/contract-item.entity';

const contractItems: ContractItem[] = [];

@Injectable()
export class ContractItemsService {
  create(createContractItemDto: CreateContractItemDto) {
    const newId = contractItems.length ? Math.max(...contractItems.map(item => item.id)) + 1 : 1;
    const newContractItem: ContractItem = { id: newId, ...createContractItemDto };
    contractItems.push(newContractItem);
    return newContractItem;
  }

  findAll() {
    return contractItems;
  }

  findOne(id: number) {
    return contractItems.find(item => item.id === id) || null;
  }

  update(id: number, updateContractItemDto: UpdateContractItemDto) {
    const contractItem = contractItems.find(item => item.id === id);
    if (!contractItem) return null;
    Object.assign(contractItem, updateContractItemDto);
    return contractItem;
  }

  remove(id: number) {
    const index = contractItems.findIndex(item => item.id === id);
    if (index === -1) return null;
    const removedItem = contractItems.splice(index, 1)[0];
    return removedItem;
  }
}
