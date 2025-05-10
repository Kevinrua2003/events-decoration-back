import { PrismaService } from 'src/prisma.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
export declare class ContractsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createContractDto: CreateContractDto): import("@prisma/client").Prisma.Prisma__ContractClient<{
        id: number;
        clientId: number;
        eventId: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        clientId: number;
        eventId: number;
        createdAt: Date;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__ContractClient<{
        id: number;
        clientId: number;
        eventId: number;
        createdAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateContractDto: UpdateContractDto): import("@prisma/client").Prisma.Prisma__ContractClient<{
        id: number;
        clientId: number;
        eventId: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__ContractClient<{
        id: number;
        clientId: number;
        eventId: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
