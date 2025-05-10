import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
export declare class ProvidersController {
    private readonly providersService;
    constructor(providersService: ProvidersService);
    create(createProviderDto: CreateProviderDto): import("prisma/generated/client").Prisma.Prisma__ProviderClient<{
        id: number;
        name: string;
        email: string;
        phone: string;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    findAll(): import("prisma/generated/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        email: string;
        phone: string;
    }[]>;
    findOne(id: string): import("prisma/generated/client").Prisma.Prisma__ProviderClient<{
        id: number;
        name: string;
        email: string;
        phone: string;
    } | null, null, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    update(id: string, updateProviderDto: UpdateProviderDto): import("prisma/generated/client").Prisma.Prisma__ProviderClient<{
        id: number;
        name: string;
        email: string;
        phone: string;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("prisma/generated/client").Prisma.Prisma__ProviderClient<{
        id: number;
        name: string;
        email: string;
        phone: string;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
}
