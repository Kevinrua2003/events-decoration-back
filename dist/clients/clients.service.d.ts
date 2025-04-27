import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
export declare class ClientsService {
    create(createClientDto: CreateClientDto): Client;
    findAll(): Client[];
    findOne(id: number): Client | null;
    update(id: number, updateClientDto: UpdateClientDto): Client | null;
    remove(id: number): Client | null;
}
