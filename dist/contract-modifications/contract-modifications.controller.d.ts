import { ContractModificationsService } from './contract-modifications.service';
import { CreateContractModificationDto } from './dto/create-contract-modification.dto';
import { UpdateContractModificationDto } from './dto/update-contract-modification.dto';
export declare class ContractModificationsController {
    private readonly contractModificationsService;
    constructor(contractModificationsService: ContractModificationsService);
    create(createContractModificationDto: CreateContractModificationDto): import("./entities/contract-modification.entity").ContractModification;
    findAll(): import("./entities/contract-modification.entity").ContractModification[];
    findOne(id: string): import("./entities/contract-modification.entity").ContractModification | null;
    update(id: string, updateContractModificationDto: UpdateContractModificationDto): import("./entities/contract-modification.entity").ContractModification | null;
    remove(id: string): import("./entities/contract-modification.entity").ContractModification | null;
}
