import { ContractItemType } from "../entities/contract-item.entity";
export declare class CreateContractItemDto {
    contractId: number;
    type: ContractItemType;
    resourceId: number;
    quantity: number;
    price: number;
}
