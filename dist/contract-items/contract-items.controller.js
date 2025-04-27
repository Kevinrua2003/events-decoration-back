"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractItemsController = void 0;
const common_1 = require("@nestjs/common");
const contract_items_service_1 = require("./contract-items.service");
const create_contract_item_dto_1 = require("./dto/create-contract-item.dto");
const update_contract_item_dto_1 = require("./dto/update-contract-item.dto");
let ContractItemsController = class ContractItemsController {
    constructor(contractItemsService) {
        this.contractItemsService = contractItemsService;
    }
    create(createContractItemDto) {
        return this.contractItemsService.create(createContractItemDto);
    }
    findAll() {
        return this.contractItemsService.findAll();
    }
    findOne(id) {
        return this.contractItemsService.findOne(+id);
    }
    update(id, updateContractItemDto) {
        return this.contractItemsService.update(+id, updateContractItemDto);
    }
    remove(id) {
        return this.contractItemsService.remove(+id);
    }
};
exports.ContractItemsController = ContractItemsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contract_item_dto_1.CreateContractItemDto]),
    __metadata("design:returntype", void 0)
], ContractItemsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContractItemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContractItemsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_contract_item_dto_1.UpdateContractItemDto]),
    __metadata("design:returntype", void 0)
], ContractItemsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContractItemsController.prototype, "remove", null);
exports.ContractItemsController = ContractItemsController = __decorate([
    (0, common_1.Controller)('contract-items'),
    __metadata("design:paramtypes", [contract_items_service_1.ContractItemsService])
], ContractItemsController);
//# sourceMappingURL=contract-items.controller.js.map