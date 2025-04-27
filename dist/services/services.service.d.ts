import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';
export declare class ServicesService {
    create(createServiceDto: CreateServiceDto): {
        name: string;
        price: number;
        description: string;
        providerId: number;
        id: number;
    };
    findAll(): Service[];
    findOne(id: number): Service | undefined;
    update(id: number, updateServiceDto: UpdateServiceDto): Service[];
    remove(id: number): Service[];
}
