import { CreateContractModificationDto } from './dto/create-contract-modification.dto';
import { UpdateContractModificationDto } from './dto/update-contract-modification.dto';
import { ContractModification } from './entities/contract-modification.entity';
export declare class ContractModificationsService {
    create(createContractModificationDto: CreateContractModificationDto): ContractModification;
    findAll(): ContractModification[];
    findOne(id: number): ContractModification | null;
    update(id: number, updateContractModificationDto: UpdateContractModificationDto): ContractModification | null;
    remove(id: number): ContractModification | null;
}
