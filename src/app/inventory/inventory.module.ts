import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RootComponent } from './root/root.component';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from '../inventory/shared/menu/menu.component';

import { DxButtonModule, DxDataGridModule, DevExtremeModule } from 'devextreme-angular';
import { SupplierComponent } from './setup/supplier/supplier.component';
import { PurchaseInvoiceComponent } from './purchase/purchase-invoice/purchase-invoice.component';
import { PurchaseOrderComponent } from './purchase/purchase-order/purchase-order.component';
import { SalesReturnComponent } from './sales/sales-return/sales-return.component';
import { GoodsreceiptComponent } from './purchase/goodsreceipt/goodsreceipt.component';
import { UnitComponent } from './setup/unit/unit.component';
import { InventoryItemComponent } from './setup/inventory-item/inventory-item.component';
import { DeliveryOrderComponent } from './sales/delivery-order/delivery-order.component';
import { SalesOrderComponent } from './sales/sales-order/sales-order.component';
import { ProductPackSizeComponent } from './setup/product-pack-size/product-pack-size.component';
import { ProductPackCategoryComponent } from './setup/product-pack-category/product-pack-category.component';
import { ProductPackTypeComponent } from './setup/product-pack-type/product-pack-type.component';
import { ProductTypeComponent } from './setup/product-type/product-type.component';
import { SalesIndentComponent } from './sales/sales-indent/sales-indent.component';
import { CustomerSetupComponent } from './setup/customer-setup/customer-setup.component';
import { CustomerBankComponent } from './setup/customer-bank/customer-bank.component';
import { CustomerAccountComponent } from './setup/customer-account/customer-account.component';
import { CustomerTypeComponent } from './setup/customer-type/customer-type.component';
import { BrandComponent } from './setup/brand/brand.component';
import { ComissionComponent } from './setup/comission/comission.component';
import { CustomerPricePickLevelComponent } from './setup/customer-price-pick-level/customer-price-pick-level.component';
import { CustomerWarehouseComponent } from './setup/customer-warehouse/customer-warehouse.component';
import { DistributorComponent } from './setup/distributor/distributor.component';
import { InventoryComponent } from './setup/inventory/inventory.component';
import { InventoryItemCategoryComponent } from './setup/inventory-item-category/inventory-item-category.component';
import { ItemPriceStructureComponent } from './setup/item-price-structure/item-price-structure.component';
import { ModeOfPaymentComponent } from './setup/mode-of-payment/mode-of-payment.component';
import { PackageTypeComponent } from './setup/package-type/package-type.component';
import { RegionComponent } from './setup/region/region.component';
import { ReturnReasonComponent } from './setup/return-reason/return-reason.component';
import { SalesPersonComponent } from './setup/sales-person/sales-person.component';
import { TaxComponent } from './setup/tax/tax.component';
import { TerritoryComponent } from './setup/territory/territory.component';
import { TransportComponent } from './setup/transport/transport.component';
import { PurchaseIndentComponent } from './purchase/purchase-indent/purchase-indent.component';
import { PurchaseIndentItemComponent } from './purchase/purchase-indent-item/purchase-indent-item.component';
import { PurchaseOrderItemComponent } from './purchase/purchase-order-item/purchase-order-item.component';
import { PurchaseReturnComponent } from './purchase/purchase-return/purchase-return.component';
import { PurchaseReturnItemComponent } from './purchase/purchase-return-item/purchase-return-item.component';
import { SalesIndentItemComponent } from './sales/sales-indent-item/sales-indent-item.component';
import { SalesReturnItemComponent } from './sales/sales-return-item/sales-return-item.component';
import { DeliveryOrderItemComponent } from './sales/delivery-order-item/delivery-order-item.component';
import { SalesInvoiceComponent } from './sales/sales-invoice/sales-invoice.component';
import { SalesOrderItemComponent } from './sales/sales-order-item/sales-order-item.component';
import { AreaComponent } from './setup/area/area.component';
import { DeliveryNoteComponent } from './sales/delivery-note/delivery-note.component';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryMasterComponent } from './setup/inventory-master/inventory-master.component';
import { IndentProcessComponent } from './sales/indent-process/indent-process.component';
import { OrderSummaryComponent } from './reports/order-summary/order-summary.component';
import { OrderDetailComponent } from './reports/order-detail/order-detail.component';

@NgModule({
    imports: [
        CommonModule,
        InventoryRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DxButtonModule,
        DevExtremeModule,
        DxDataGridModule
    ],
    declarations: [
        RootComponent,
        HomeComponent,
        MenuComponent,
        GoodsreceiptComponent,
        PurchaseIndentComponent,
        PurchaseIndentItemComponent,
        PurchaseInvoiceComponent,
        PurchaseOrderComponent,
        PurchaseOrderItemComponent,
        PurchaseReturnComponent,
        PurchaseReturnItemComponent,
        DeliveryOrderComponent,
        DeliveryOrderComponent,
        DeliveryOrderItemComponent,
        SalesIndentComponent,
        SalesIndentItemComponent,
        SalesInvoiceComponent,
        SalesOrderComponent,
        SalesOrderItemComponent,
        SalesReturnComponent,
        SalesReturnItemComponent,
        AreaComponent,
        BrandComponent,
        ComissionComponent,
        CustomerAccountComponent,
        CustomerBankComponent,
        CustomerPricePickLevelComponent,
        CustomerSetupComponent,
        CustomerTypeComponent,
        CustomerWarehouseComponent,
        DistributorComponent,
        InventoryComponent,
        InventoryItemComponent,
        InventoryItemCategoryComponent,
        ItemPriceStructureComponent,
        ModeOfPaymentComponent,
        PackageTypeComponent,
        ProductPackCategoryComponent,
        ProductPackSizeComponent,
        ProductPackTypeComponent,
        ProductTypeComponent,
        RegionComponent,
        ReturnReasonComponent,
        SalesPersonComponent,
        SupplierComponent,
        TaxComponent,
        TerritoryComponent,
        TransportComponent,
        UnitComponent,
        DeliveryNoteComponent,
        InventoryMasterComponent,
<<<<<<< HEAD
        IndentProcessComponent
=======
        OrderSummaryComponent, 
        OrderDetailComponent
>>>>>>> etracker
    ]
})
export class InventoryModule { }
