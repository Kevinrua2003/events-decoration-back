"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const events_module_1 = require("./events/events.module");
const services_module_1 = require("./services/services.module");
const products_module_1 = require("./products/products.module");
const employees_module_1 = require("./employees/employees.module");
const providers_module_1 = require("./providers/providers.module");
const contracts_module_1 = require("./contracts/contracts.module");
const contract_items_module_1 = require("./contract-items/contract-items.module");
const contract_modifications_module_1 = require("./contract-modifications/contract-modifications.module");
const clients_module_1 = require("./clients/clients.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [events_module_1.EventsModule, services_module_1.ServicesModule, products_module_1.ProductsModule, employees_module_1.EmployeesModule, providers_module_1.ProvidersModule, contracts_module_1.ContractsModule, contract_items_module_1.ContractItemsModule, contract_modifications_module_1.ContractModificationsModule, clients_module_1.ClientsModule],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map