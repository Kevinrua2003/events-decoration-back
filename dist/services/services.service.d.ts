import { PrismaService } from 'src/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createServiceDto: CreateServiceDto): import("prisma/generated/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        price: number;
        description: string;
        providerId: number;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    findAll(): import("prisma/generated/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        price: number;
        description: string;
        providerId: number;
    }[]>;
    findOne(id: number): import("prisma/generated/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        price: number;
        description: string;
        providerId: number;
    } | null, null, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    update(id: number, updateServiceDto: UpdateServiceDto): import("prisma/generated/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        price: number;
        description: string;
        providerId: number;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("prisma/generated/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        price: number;
        description: string;
        providerId: number;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
}
