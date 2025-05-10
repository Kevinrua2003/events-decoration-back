import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
export declare class ProvidersController {
    private readonly providersService;
    constructor(providersService: ProvidersService);
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__ProviderClient<{
        id: number;
        name: string;
        email: string;
        phone: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateProviderDto: UpdateProviderDto): import("@prisma/client").Prisma.Prisma__ProviderClient<{
        id: number;
        name: string;
        email: string;
        phone: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__ProviderClient<{
        id: number;
        name: string;
        email: string;
        phone: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
