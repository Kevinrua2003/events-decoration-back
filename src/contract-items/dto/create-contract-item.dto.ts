import { ContractItemType } from "../entities/contract-item.entity"

export class CreateContractItemDto {
    contractId: number
    type:        ContractItemType 
    resourceId: number  
    quantity: number
    price: number
}
