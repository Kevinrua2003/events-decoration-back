import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

const clients: Client[] = [
    {
        id: 1,
        firstName: 'Alice',
        lastName: 'Johnson',
        email: 'alice.johnson@example.com',
        phone: '555-0401'
    },
    {
        id: 2,
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bob.smith@example.com',
        phone: '555-0402'
    },
    {
        id: 3,
        firstName: 'Charlie',
        lastName: 'Brown',
        email: 'charlie.brown@example.com',
        phone: '555-0403'
    },
];

@Injectable()
export class ClientsService {
  create(createClientDto: CreateClientDto) {
    const newId = clients.length ? Math.max(...clients.map(c => c.id)) + 1 : 1;
    const newClient: Client = { id: newId, ...createClientDto };
    clients.push(newClient);
    return newClient;
  }

  findAll() {
    return clients;
  }

  findOne(id: number) {
    return clients.find(client => client.id === id) || null;
  }

  findOneByEmail(email: string) {
    return clients.find(client => client.email === email) || null;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    const client = clients.find(client => client.id === id);
    if (!client) return null;
    Object.assign(client, updateClientDto);
    return client;
  }

  remove(id: number) {
    const index = clients.findIndex(client => client.id === id);
    if (index === -1) return null;
    const removedClient = clients.splice(index, 1)[0];
    return removedClient;
  }
}
