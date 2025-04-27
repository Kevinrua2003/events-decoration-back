import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    create(createServiceDto: CreateServiceDto): {
        name: string;
        price: number;
        description: string;
        providerId: number;
        id: number;
    };
    findAll(): import("./entities/service.entity").Service[];
    findOne(id: string): import("./entities/service.entity").Service | undefined;
    update(id: string, updateServiceDto: UpdateServiceDto): import("./entities/service.entity").Service[];
    remove(id: string): import("./entities/service.entity").Service[];
}
