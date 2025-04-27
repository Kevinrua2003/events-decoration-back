import { ContractItemType } from '../entities/contract-item.entity';
export declare class UpdateContractItemDto {
    contractId: number;
    type: ContractItemType;
    resourceId: number;
    quantity: number;
    price: number;
}
