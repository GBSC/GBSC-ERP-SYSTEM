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
    unitId: number,
    Unit: Unit,
    packTypeId: number,
    PackType: PackType,
    packSizeId: number,
    PackSize: PackSize,
    packCategoryId: number,
    PackCategory: PackCategory,
    productTypeId: number,
    ProductType: ProductType,
    inventoryItemCategoryId: number,
    InventoryItemCategoryId: InventoryItemCategory,
    packageTypeId: number,
    inventory: Inventory
}