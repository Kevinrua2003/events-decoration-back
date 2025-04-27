"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractsService = void 0;
const common_1 = require("@nestjs/common");
const contracts = [];
let ContractsService = class ContractsService {
    create(createContractDto) {
        const newId = contracts.length ? Math.max(...contracts.map(c => c.id)) + 1 : 1;
        const newContract = {
            ...createContractDto,
            id: newId,
            createdAt: new Date()
        };
        contracts.push(newContract);
        return newContract;
    }
    findAll() {
        return contracts;
    }
    findOne(id) {
        return contracts.find(contract => contract.id === id) || null;
    }
    update(id, updateContractDto) {
        const contract = contracts.find(contract => contract.id === id);
        if (!contract)
            return null;
        Object.assign(contract, updateContractDto);
        return contract;
    }
    remove(id) {
        const index = contracts.findIndex(contract => contract.id === id);
        if (index === -1)
            return null;
        const removedContract = contracts.splice(index, 1)[0];
        return removedContract;
    }
};
exports.ContractsService = ContractsService;
exports.ContractsService = ContractsService = __decorate([
    (0, common_1.Injectable)()
], ContractsService);
//# sourceMappingURL=contracts.service.js.map