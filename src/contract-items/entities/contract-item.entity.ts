export enum ContractItemType {
    PRODUCT = 'PRODUCT',
    SERVICE = 'SERVICE',
}

export class ContractItem {
    id: number 
    contractId: number
    type:        ContractItemType 
    resourceId: number  
    quantity: number
    price: number
}
