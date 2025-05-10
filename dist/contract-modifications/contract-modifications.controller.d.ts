import { ContractModificationsService } from './contract-modifications.service';
import { CreateContractModificationDto } from './dto/create-contract-modification.dto';
import { UpdateContractModificationDto } from './dto/update-contract-modification.dto';
export declare class ContractModificationsController {
    private readonly contractModificationsService;
    constructor(contractModificationsService: ContractModificationsService);
    create(createContractModificationDto: CreateContractModificationDto): import("prisma/generated/client").Prisma.Prisma__ContractModificationClient<{
        id: number;
        description: string;
        contractId: number;
        modifiedAt: Date;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    findAll(): import("prisma/generated/client").Prisma.PrismaPromise<{
        id: number;
        description: string;
        contractId: number;
        modifiedAt: Date;
    }[]>;
    findOne(id: string): import("prisma/generated/client").Prisma.Prisma__ContractModificationClient<{
        id: number;
        description: string;
        contractId: number;
        modifiedAt: Date;
    } | null, null, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    update(id: string, updateContractModificationDto: UpdateContractModificationDto): import("prisma/generated/client").Prisma.Prisma__ContractModificationClient<{
        id: number;
        description: string;
        contractId: number;
        modifiedAt: Date;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("prisma/generated/client").Prisma.Prisma__ContractModificationClient<{
        id: number;
        description: string;
        contractId: number;
        modifiedAt: Date;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
}
