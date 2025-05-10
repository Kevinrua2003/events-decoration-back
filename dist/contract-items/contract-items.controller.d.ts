import { ContractItemsService } from './contract-items.service';
import { CreateContractItemDto } from './dto/create-contract-item.dto';
import { UpdateContractItemDto } from './dto/update-contract-item.dto';
export declare class ContractItemsController {
    private readonly contractItemsService;
    constructor(contractItemsService: ContractItemsService);
    create(createContractItemDto: CreateContractItemDto): import("prisma/generated/client").Prisma.Prisma__ContractItemClient<{
        id: number;
        type: import("prisma/generated/client").$Enums.ResourceType;
        price: number;
        contractId: number;
        resourceId: number;
        quantity: number;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    findAll(): import("prisma/generated/client").Prisma.PrismaPromise<{
        id: number;
        type: import("prisma/generated/client").$Enums.ResourceType;
        price: number;
        contractId: number;
        resourceId: number;
        quantity: number;
    }[]>;
    findOne(id: string): import("prisma/generated/client").Prisma.Prisma__ContractItemClient<{
        id: number;
        type: import("prisma/generated/client").$Enums.ResourceType;
        price: number;
        contractId: number;
        resourceId: number;
        quantity: number;
    } | null, null, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    update(id: string, updateContractItemDto: UpdateContractItemDto): import("prisma/generated/client").Prisma.Prisma__ContractItemClient<{
        id: number;
        type: import("prisma/generated/client").$Enums.ResourceType;
        price: number;
        contractId: number;
        resourceId: number;
        quantity: number;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("prisma/generated/client").Prisma.Prisma__ContractItemClient<{
        id: number;
        type: import("prisma/generated/client").$Enums.ResourceType;
        price: number;
        contractId: number;
        resourceId: number;
        quantity: number;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
}
