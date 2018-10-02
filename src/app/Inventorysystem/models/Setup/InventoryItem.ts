import { Inventory } from "./Inventory";

export interface InventoryItem {
    inventoryItemId: number,
    name : string,
    itemCode: string,
    description: string,
    unitPrice: number,
    packTypeInPackageType: number,
    dose: string,
    minLevel: number,
    costPrice: string,
    retailPrice: string,
    purchaseDate: string,
    tradeOfferAmount: number,
    brandId: number,
    unitId: number,
    packTypeId: number,
    packSizeId: number,
    packCategoryId: number,
    productTypeId: number,
    inventoryItemCategoryId: number,
    packageTypeId: number,
    inventory : Inventory
}