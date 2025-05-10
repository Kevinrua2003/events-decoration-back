import { PrismaService } from 'src/prisma.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
export declare class ProvidersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProviderDto: CreateProviderDto): import("@prisma/client").Prisma.Prisma__ProviderClient<{
        id: number;
        name: string;
        email: string;
        phone: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        email: string;
        phone: string;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__ProviderClient<{
        id: number;
        name: string;
        email: string;
        phone: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateProviderDto: UpdateProviderDto): import("@prisma/client").Prisma.Prisma__ProviderClient<{
        id: number;
        name: string;
        email: string;
        phone: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__ProviderClient<{
        id: number;
        name: string;
        email: string;
        phone: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
