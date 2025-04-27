export declare enum ContractItemType {
    PRODUCT = "PRODUCT",
    SERVICE = "SERVICE"
}
export declare class ContractItem {
    id: number;
    contractId: number;
    type: ContractItemType;
    resourceId: number;
    quantity: number;
    price: number;
}
