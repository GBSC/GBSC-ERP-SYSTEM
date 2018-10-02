import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from '../Inventorysystem/root/root.component';
import { HomeComponent } from '../Inventorysystem/home/home.component';
import { PurchaseInvoiceComponent } from './Purchase/purchase-invoice/purchase-invoice.component';
import { PurchaseOrderComponent } from './Purchase/purchase-order/purchase-order.component';
import { SalesReturnComponent } from './Sales/sales-return/sales-return.component';
import { GoodsreceiptComponent } from './Purchase/goodsreceipt/goodsreceipt.component';
import { UnitComponent } from './Setup/unit/unit.component';
import { InventoryItemComponent } from './Setup/inventory-item/inventory-item.component';
import { DeliveryOrderComponent } from './Sales/delivery-order/delivery-order.component';
import { SalesOrderComponent } from './Sales/sales-order/sales-order.component';
import { ProductPackCategoryComponent } from './Setup/product-pack-category/product-pack-category.component';
import { ProductPackSizeComponent } from './Setup/product-pack-size/product-pack-size.component';
import { ProductPackTypeComponent } from './Setup/product-pack-type/product-pack-type.component';
import { ProductTypeComponent } from './Setup/product-type/product-type.component';
import { SalesIndentComponent } from './Sales/sales-indent/sales-indent.component';
import { CustomerSetupComponent } from './Setup/customer-setup/customer-setup.component';
import { CustomerAccountComponent } from './Setup/customer-account/customer-account.component';
import { CustomerBankComponent } from './Setup/customer-bank/customer-bank.component';
import { CustomerTypeComponent } from './Setup/customer-type/customer-type.component';
import { SupplierComponent } from './Setup/supplier/supplier.component';
import { AreaComponent } from './Setup/area/area.component';
import { ComissionComponent } from './Setup/comission/comission.component';
import { BrandComponent } from './Setup/brand/brand.component';
import { CustomerPricePickLevelComponent } from './Setup/customer-price-pick-level/customer-price-pick-level.component';
import { CustomerWarehouseComponent } from './Setup/customer-warehouse/customer-warehouse.component';
import { InventoryComponent } from './Setup/inventory/inventory.component';
import { InventoryItemCategoryComponent } from './Setup/inventory-item-category/inventory-item-category.component';
import { ItemPriceStructureComponent } from './Setup/item-price-structure/item-price-structure.component';
import { ModeOfPaymentComponent } from './Setup/mode-of-payment/mode-of-payment.component';
import { PackageTypeComponent } from './Setup/package-type/package-type.component';
import { TerritoryComponent } from './Setup/territory/territory.component';
import { TransportComponent } from './Setup/transport/transport.component';
import { DistributorComponent } from './Setup/distributor/distributor.component';
import { RegionComponent } from './Setup/region/region.component';
import { ReturnReasonComponent } from './Setup/return-reason/return-reason.component';
import { SalesPersonComponent } from './Setup/sales-person/sales-person.component';
import { TaxComponent } from './Setup/tax/tax.component';
import { SalesIndentItemComponent } from './Sales/sales-indent-item/sales-indent-item.component';
import { DeliveryNoteComponent } from './Sales/delivery-note/delivery-note.component';
import { DeliveryOrderItemComponent } from './Sales/delivery-order-item/delivery-order-item.component';
import { SalesInvoiceComponent } from './Sales/sales-invoice/sales-invoice.component';
import { SalesOrderItemComponent } from './Sales/sales-order-item/sales-order-item.component';
import { SalesReturnItemComponent } from './Sales/sales-return-item/sales-return-item.component';
import { PurchaseIndentItemComponent } from './Purchase/purchase-indent-item/purchase-indent-item.component';
import { PurchaseOrderItemComponent } from './Purchase/purchase-order-item/purchase-order-item.component';
import { PurchaseReturnComponent } from './Purchase/purchase-return/purchase-return.component';
import { PurchaseReturnItemComponent } from './Purchase/purchase-return-item/purchase-return-item.component';
import { PurchaseIndentComponent } from './Purchase/purchase-indent/purchase-indent.component';

export const routing: ModuleWithProviders = RouterModule.forChild([



    {
        path: 'Inventorysystem',
        component: RootComponent,

        children: [
            { path: 'home', component: HomeComponent },
            {
                path: "setup",
                children: [
                    { path: 'area', component: AreaComponent },
                    { path: 'brand', component: BrandComponent },
                    { path: 'comission', component: ComissionComponent },
                    { path: 'customeraccount', component: CustomerAccountComponent },
                    { path: 'customerbank', component: CustomerBankComponent },
                    { path: 'pricepicklevel', component: CustomerPricePickLevelComponent },
                    { path: 'customer', component: CustomerSetupComponent },
                    { path: 'customertype', component: CustomerTypeComponent },
                    { path: 'customerwarehouse', component: CustomerWarehouseComponent },
                    { path: 'distributor', component: DistributorComponent },
                    { path: 'inventorystock', component: InventoryComponent },
                    { path: 'inventoryitem', component: InventoryItemComponent },
                    { path: 'inventoryitemcategory', component: InventoryItemCategoryComponent },
                    { path: 'itempricestructure', component: ItemPriceStructureComponent },
                    { path: 'modeofpayment', component: ModeOfPaymentComponent },
                    { path: 'packagetype', component: PackageTypeComponent },
                    { path: 'productpackcategory', component: ProductPackCategoryComponent },
                    { path: 'packsize', component: ProductPackSizeComponent },
                    { path: 'packtype', component: ProductPackTypeComponent },
                    { path: 'producttype', component: ProductTypeComponent },
                    { path: 'region', component: RegionComponent },
                    { path: 'returnreason', component: ReturnReasonComponent },
                    { path: 'salesperson', component: SalesPersonComponent },
                    { path: 'supplier', component: SupplierComponent },
                    { path: 'tax', component: TaxComponent },
                    { path: 'territory', component: TerritoryComponent },
                    { path: 'transport', component: TransportComponent },
                    { path: 'unit', component: UnitComponent }
                ]
            },
            {
                path: "sales",
                children: [
                    { path: 'dispatchnote', component: DeliveryNoteComponent },
                    { path: 'DeliveryOrder', component: DeliveryOrderComponent },
                    { path: 'DeliveryOrderItem', component: DeliveryOrderItemComponent },
                    { path: 'SalesIndent', component: SalesIndentComponent },
                    { path: 'SalesIndentItem', component: SalesIndentItemComponent },
                    { path: 'SalesInvoice', component: SalesInvoiceComponent },
                    { path: 'salesorder', component: SalesOrderComponent },
                    { path: 'SalesOrderItem', component: SalesOrderItemComponent },
                    { path: 'SalesReturn', component: SalesReturnComponent },
                    { path: 'SalesReturnItem', component: SalesReturnItemComponent }
                ]
            },
            {
                path: "purchase",
                children: [
                    { path: 'grn', component: GoodsreceiptComponent },
                    { path: 'PurchaseIndent', component: PurchaseIndentComponent },
                    { path: 'PurchaseIndentItem', component: PurchaseIndentItemComponent },
                    { path: 'purchaseinvoice', component: PurchaseInvoiceComponent },
                    { path: 'purchaseorder', component: PurchaseOrderComponent },
                    { path: 'PurchaseOrderItem', component: PurchaseOrderItemComponent },
                    { path: 'PurchaseReturn', component: PurchaseReturnComponent },
                    { path: 'PurchaseReturnItem', component: PurchaseReturnItemComponent }
                ]
            }
        ]
    }

]);