import { CreateContractItemDto } from './dto/create-contract-item.dto';
import { UpdateContractItemDto } from './dto/update-contract-item.dto';
import { ContractItem } from './entities/contract-item.entity';
export declare class ContractItemsService {
    create(createContractItemDto: CreateContractItemDto): ContractItem;
    findAll(): ContractItem[];
    findOne(id: number): ContractItem | null;
    update(id: number, updateContractItemDto: UpdateContractItemDto): ContractItem | null;
    remove(id: number): ContractItem | null;
}
