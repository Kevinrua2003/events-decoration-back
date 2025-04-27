"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractItemsService = void 0;
const common_1 = require("@nestjs/common");
const contractItems = [];
let ContractItemsService = class ContractItemsService {
    create(createContractItemDto) {
        const newId = contractItems.length ? Math.max(...contractItems.map(item => item.id)) + 1 : 1;
        const newContractItem = { id: newId, ...createContractItemDto };
        contractItems.push(newContractItem);
        return newContractItem;
    }
    findAll() {
        return contractItems;
    }
    findOne(id) {
        return contractItems.find(item => item.id === id) || null;
    }
    update(id, updateContractItemDto) {
        const contractItem = contractItems.find(item => item.id === id);
        if (!contractItem)
            return null;
        Object.assign(contractItem, updateContractItemDto);
        return contractItem;
    }
    remove(id) {
        const index = contractItems.findIndex(item => item.id === id);
        if (index === -1)
            return null;
        const removedItem = contractItems.splice(index, 1)[0];
        return removedItem;
    }
};
exports.ContractItemsService = ContractItemsService;
exports.ContractItemsService = ContractItemsService = __decorate([
    (0, common_1.Injectable)()
], ContractItemsService);
//# sourceMappingURL=contract-items.service.js.map