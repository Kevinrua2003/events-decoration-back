import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        price: number;
        description: string;
        providerId: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateServiceDto: UpdateServiceDto): import("@prisma/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        price: number;
        description: string;
        providerId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__ServiceClient<{
        id: number;
        name: string;
        price: number;
        description: string;
        providerId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
