import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): import("prisma/generated/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        providerId: number;
        image: string;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    findAll(): import("prisma/generated/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        price: number;
        providerId: number;
        image: string;
    }[]>;
    findOne(id: string): import("prisma/generated/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        providerId: number;
        image: string;
    } | null, null, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    update(id: string, updateProductDto: UpdateProductDto): import("prisma/generated/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        providerId: number;
        image: string;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("prisma/generated/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        providerId: number;
        image: string;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
}
