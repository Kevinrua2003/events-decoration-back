import { PrismaService } from 'src/prisma.service';
import { CreateContractModificationDto } from './dto/create-contract-modification.dto';
import { UpdateContractModificationDto } from './dto/update-contract-modification.dto';
export declare class ContractModificationsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createContractModificationDto: CreateContractModificationDto): import("@prisma/client").Prisma.Prisma__ContractModificationClient<{
        id: number;
        description: string;
        contractId: number;
        modifiedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        description: string;
        contractId: number;
        modifiedAt: Date;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__ContractModificationClient<{
        id: number;
        description: string;
        contractId: number;
        modifiedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateContractModificationDto: UpdateContractModificationDto): import("@prisma/client").Prisma.Prisma__ContractModificationClient<{
        id: number;
        description: string;
        contractId: number;
        modifiedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__ContractModificationClient<{
        id: number;
        description: string;
        contractId: number;
        modifiedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
