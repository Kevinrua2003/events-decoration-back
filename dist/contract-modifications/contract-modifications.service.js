"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractModificationsService = void 0;
const common_1 = require("@nestjs/common");
const contractModifications = [];
let ContractModificationsService = class ContractModificationsService {
    create(createContractModificationDto) {
        const newId = contractModifications.length ? Math.max(...contractModifications.map(mod => mod.id)) + 1 : 1;
        const newModification = {
            id: newId,
            contractId: createContractModificationDto.contractId,
            description: createContractModificationDto.description,
            modifiedAt: new Date()
        };
        contractModifications.push(newModification);
        return newModification;
    }
    findAll() {
        return contractModifications;
    }
    findOne(id) {
        return contractModifications.find(mod => mod.id === id) || null;
    }
    update(id, updateContractModificationDto) {
        const modification = contractModifications.find(mod => mod.id === id);
        if (!modification)
            return null;
        Object.assign(modification, updateContractModificationDto);
        modification.modifiedAt = new Date();
        return modification;
    }
    remove(id) {
        const index = contractModifications.findIndex(mod => mod.id === id);
        if (index === -1)
            return null;
        const removedModification = contractModifications.splice(index, 1)[0];
        return removedModification;
    }
};
exports.ContractModificationsService = ContractModificationsService;
exports.ContractModificationsService = ContractModificationsService = __decorate([
    (0, common_1.Injectable)()
], ContractModificationsService);
//# sourceMappingURL=contract-modifications.service.js.map