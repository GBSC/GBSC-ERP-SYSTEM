import { Inventory } from "./Inventory";
import { Unit } from "./Unit";
import { PackType } from "./PackType";
import { PackSize } from "./PackSize";
import { PackCategory } from "./PackCategory";
import { ProductType } from "./ProductType";
import { InventoryItemCategory } from "./InventoryItemCategory";
import { PackageType } from "./PackageType";

export interface InventoryItem {
    inventoryItemId: number,
    name: string,
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
    measurementUnitId: number,
    unit: Unit,
    packTypeId: number,
    packType: PackType,
    packSizeId: number,
    packSize: PackSize,
    packCategoryId: number,
    packCategory: PackCategory,
    productTypeId: number,
    productType: ProductType,
    inventoryItemCategoryId: number,
    inventoryItemCategory: InventoryItemCategory,
    packageTypeId: number,
    inventoryId: number,
    inventory: Inventory
}