import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        providerId: number;
        image: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateProductDto: UpdateProductDto): import("@prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        providerId: number;
        image: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        providerId: number;
        image: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
