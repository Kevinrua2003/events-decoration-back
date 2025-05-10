"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractModificationsModule = void 0;
const common_1 = require("@nestjs/common");
const contract_modifications_service_1 = require("./contract-modifications.service");
const contract_modifications_controller_1 = require("./contract-modifications.controller");
const prisma_service_1 = require("../prisma.service");
let ContractModificationsModule = class ContractModificationsModule {
};
exports.ContractModificationsModule = ContractModificationsModule;
exports.ContractModificationsModule = ContractModificationsModule = __decorate([
    (0, common_1.Module)({
        controllers: [contract_modifications_controller_1.ContractModificationsController],
        providers: [contract_modifications_service_1.ContractModificationsService, prisma_service_1.PrismaService],
    })
], ContractModificationsModule);
//# sourceMappingURL=contract-modifications.module.js.map