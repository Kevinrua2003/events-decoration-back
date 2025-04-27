import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { Contract } from './entities/contract.entity';
export declare class ContractsService {
    create(createContractDto: CreateContractDto): Contract;
    findAll(): Contract[];
    findOne(id: number): Contract | null;
    update(id: number, updateContractDto: UpdateContractDto): Contract | null;
    remove(id: number): Contract | null;
}
