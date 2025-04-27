import { ContractItemsService } from './contract-items.service';
import { CreateContractItemDto } from './dto/create-contract-item.dto';
import { UpdateContractItemDto } from './dto/update-contract-item.dto';
export declare class ContractItemsController {
    private readonly contractItemsService;
    constructor(contractItemsService: ContractItemsService);
    create(createContractItemDto: CreateContractItemDto): import("./entities/contract-item.entity").ContractItem;
    findAll(): import("./entities/contract-item.entity").ContractItem[];
    findOne(id: string): import("./entities/contract-item.entity").ContractItem | null;
    update(id: string, updateContractItemDto: UpdateContractItemDto): import("./entities/contract-item.entity").ContractItem | null;
    remove(id: string): import("./entities/contract-item.entity").ContractItem | null;
}
