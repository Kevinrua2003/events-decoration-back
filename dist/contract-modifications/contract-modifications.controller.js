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
exports.ContractModificationsController = void 0;
const common_1 = require("@nestjs/common");
const contract_modifications_service_1 = require("./contract-modifications.service");
const create_contract_modification_dto_1 = require("./dto/create-contract-modification.dto");
const update_contract_modification_dto_1 = require("./dto/update-contract-modification.dto");
let ContractModificationsController = class ContractModificationsController {
    constructor(contractModificationsService) {
        this.contractModificationsService = contractModificationsService;
    }
    create(createContractModificationDto) {
        return this.contractModificationsService.create(createContractModificationDto);
    }
    findAll() {
        return this.contractModificationsService.findAll();
    }
    findOne(id) {
        return this.contractModificationsService.findOne(+id);
    }
    update(id, updateContractModificationDto) {
        return this.contractModificationsService.update(+id, updateContractModificationDto);
    }
    remove(id) {
        return this.contractModificationsService.remove(+id);
    }
};
exports.ContractModificationsController = ContractModificationsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contract_modification_dto_1.CreateContractModificationDto]),
    __metadata("design:returntype", void 0)
], ContractModificationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContractModificationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContractModificationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_contract_modification_dto_1.UpdateContractModificationDto]),
    __metadata("design:returntype", void 0)
], ContractModificationsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContractModificationsController.prototype, "remove", null);
exports.ContractModificationsController = ContractModificationsController = __decorate([
    (0, common_1.Controller)('contract-modifications'),
    __metadata("design:paramtypes", [contract_modifications_service_1.ContractModificationsService])
], ContractModificationsController);
//# sourceMappingURL=contract-modifications.controller.js.map