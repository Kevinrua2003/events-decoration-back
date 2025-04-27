import { Injectable } from '@nestjs/common';
import { CreateContractModificationDto } from './dto/create-contract-modification.dto';
import { UpdateContractModificationDto } from './dto/update-contract-modification.dto';
import { ContractModification } from './entities/contract-modification.entity';

const contractModifications: ContractModification[] = [];

@Injectable()
export class ContractModificationsService {
  create(createContractModificationDto: CreateContractModificationDto) {
    const newId = contractModifications.length ? Math.max(...contractModifications.map(mod => mod.id)) + 1 : 1;
    const newModification: ContractModification = {
      id: newId,
      contractId: createContractModificationDto.contractId,
      description: createContractModificationDto.description,
      modifiedAt: new Date()
    };
    contractModifications.push(newModification);
    return newModification;
  }

  findAll() {
    return contractModifications;
  }

  findOne(id: number) {
    return contractModifications.find(mod => mod.id === id) || null;
  }

  update(id: number, updateContractModificationDto: UpdateContractModificationDto) {
    const modification = contractModifications.find(mod => mod.id === id);
    if (!modification) return null;
    Object.assign(modification, updateContractModificationDto);
    modification.modifiedAt = new Date();
    return modification;
  }

  remove(id: number) {
    const index = contractModifications.findIndex(mod => mod.id === id);
    if (index === -1) return null;
    const removedModification = contractModifications.splice(index, 1)[0];
    return removedModification;
  }
}
