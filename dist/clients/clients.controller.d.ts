import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    create(createClientDto: CreateClientDto): import("./entities/client.entity").Client;
    findAll(): import("./entities/client.entity").Client[];
    findOne(id: string): import("./entities/client.entity").Client | null;
    update(id: string, updateClientDto: UpdateClientDto): import("./entities/client.entity").Client | null;
    remove(id: string): import("./entities/client.entity").Client | null;
}
