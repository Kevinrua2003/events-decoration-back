import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): import("@prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        providerId: number;
        image: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        price: number;
        providerId: number;
        image: string;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        providerId: number;
        image: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateProductDto: UpdateProductDto): import("@prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        providerId: number;
        image: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        providerId: number;
        image: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
