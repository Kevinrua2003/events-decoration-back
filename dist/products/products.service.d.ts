import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    create(createProductDto: CreateProductDto): Product;
    findAll(): Product[];
    findOne(id: number): Product | undefined;
    update(id: number, updateProductDto: UpdateProductDto): Product | null;
    remove(id: number): Product | null;
}
