import { PrismaService } from 'src/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createServiceDto: CreateServiceDto): import("@prisma/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        price: number;
        description: string;
        providerId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        price: number;
        description: string;
        providerId: number;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        price: number;
        description: string;
        providerId: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateServiceDto: UpdateServiceDto): import("@prisma/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        price: number;
        description: string;
        providerId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        price: number;
        description: string;
        providerId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
