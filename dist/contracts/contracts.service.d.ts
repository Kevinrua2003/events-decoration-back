import { PrismaService } from 'src/prisma.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
export declare class ContractsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createContractDto: CreateContractDto): import("prisma/generated/client").Prisma.Prisma__ContractClient<{
        id: number;
        clientId: number;
        eventId: number;
        createdAt: Date;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    findAll(): import("prisma/generated/client").Prisma.PrismaPromise<{
        id: number;
        clientId: number;
        eventId: number;
        createdAt: Date;
    }[]>;
    findOne(id: number): import("prisma/generated/client").Prisma.Prisma__ContractClient<{
        id: number;
        clientId: number;
        eventId: number;
        createdAt: Date;
    } | null, null, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    update(id: number, updateContractDto: UpdateContractDto): import("prisma/generated/client").Prisma.Prisma__ContractClient<{
        id: number;
        clientId: number;
        eventId: number;
        createdAt: Date;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("prisma/generated/client").Prisma.Prisma__ContractClient<{
        id: number;
        clientId: number;
        eventId: number;
        createdAt: Date;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
}
