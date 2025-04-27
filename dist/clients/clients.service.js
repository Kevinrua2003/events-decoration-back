"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const clients = [
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
let ClientsService = class ClientsService {
    create(createClientDto) {
        const newId = clients.length ? Math.max(...clients.map(c => c.id)) + 1 : 1;
        const newClient = { id: newId, ...createClientDto };
        clients.push(newClient);
        return newClient;
    }
    findAll() {
        return clients;
    }
    findOne(id) {
        return clients.find(client => client.id === id) || null;
    }
    update(id, updateClientDto) {
        const client = clients.find(client => client.id === id);
        if (!client)
            return null;
        Object.assign(client, updateClientDto);
        return client;
    }
    remove(id) {
        const index = clients.findIndex(client => client.id === id);
        if (index === -1)
            return null;
        const removedClient = clients.splice(index, 1)[0];
        return removedClient;
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)()
], ClientsService);
//# sourceMappingURL=clients.service.js.map