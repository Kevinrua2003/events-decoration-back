import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { Provider } from './entities/provider.entity';
export declare class ProvidersService {
    create(createProviderDto: CreateProviderDto): Provider;
    findAll(): Provider[];
    findOne(id: number): Provider | null;
    update(id: number, updateProviderDto: UpdateProviderDto): Provider | null;
    remove(id: number): Provider | null;
}
