import { PrismaService } from 'src/prisma.service';
import { CreateContractItemDto } from './dto/create-contract-item.dto';
import { UpdateContractItemDto } from './dto/update-contract-item.dto';
export declare class ContractItemsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createContractItemDto: CreateContractItemDto): import("@prisma/client").Prisma.Prisma__ContractItemClient<{
        id: number;
        type: import("@prisma/client").$Enums.ResourceType;
        price: number;
        contractId: number;
        resourceId: number;
        quantity: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        type: import("@prisma/client").$Enums.ResourceType;
        price: number;
        contractId: number;
        resourceId: number;
        quantity: number;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__ContractItemClient<{
        id: number;
        type: import("@prisma/client").$Enums.ResourceType;
        price: number;
        contractId: number;
        resourceId: number;
        quantity: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateContractItemDto: UpdateContractItemDto): import("@prisma/client").Prisma.Prisma__ContractItemClient<{
        id: number;
        type: import("@prisma/client").$Enums.ResourceType;
        price: number;
        contractId: number;
        resourceId: number;
        quantity: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__ContractItemClient<{
        id: number;
        type: import("@prisma/client").$Enums.ResourceType;
        price: number;
        contractId: number;
        resourceId: number;
        quantity: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
