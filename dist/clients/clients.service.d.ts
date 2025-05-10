import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/prisma.service';
export declare class ClientsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createClientDto: CreateClientDto): import("prisma/generated/client").Prisma.Prisma__ClientClient<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    findAll(): import("prisma/generated/client").Prisma.PrismaPromise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    }[]>;
    findOne(id: number): import("prisma/generated/client").Prisma.Prisma__ClientClient<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    } | null, null, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    findOneByEmail(email: string): import("prisma/generated/client").Prisma.Prisma__ClientClient<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    } | null, null, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    update(id: number, updateClientDto: UpdateClientDto): import("prisma/generated/client").Prisma.Prisma__ClientClient<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("prisma/generated/client").Prisma.Prisma__ClientClient<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
}
