import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
export declare class ProvidersController {
    private readonly providersService;
    constructor(providersService: ProvidersService);
    create(createProviderDto: CreateProviderDto): import("./entities/provider.entity").Provider;
    findAll(): import("./entities/provider.entity").Provider[];
    findOne(id: string): import("./entities/provider.entity").Provider | null;
    update(id: string, updateProviderDto: UpdateProviderDto): import("./entities/provider.entity").Provider | null;
    remove(id: string): import("./entities/provider.entity").Provider | null;
}
