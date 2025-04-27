import { ContractsService } from './contracts.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
export declare class ContractsController {
    private readonly contractsService;
    constructor(contractsService: ContractsService);
    create(createContractDto: CreateContractDto): import("./entities/contract.entity").Contract;
    findAll(): import("./entities/contract.entity").Contract[];
    findOne(id: string): import("./entities/contract.entity").Contract | null;
    update(id: string, updateContractDto: UpdateContractDto): import("./entities/contract.entity").Contract | null;
    remove(id: string): import("./entities/contract.entity").Contract | null;
}
