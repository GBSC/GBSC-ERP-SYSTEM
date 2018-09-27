import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './Inventorysystem.routing';
import { RootComponent } from './root/root.component';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from '../Inventorysystem/shared/footer/footer.component';
import { HeaderComponent } from '../Inventorysystem/shared/header/header.component';
import { MenuComponent } from '../Inventorysystem/shared/menu/menu.component';

import { DxButtonModule, DxDataGridModule, DevExtremeModule } from 'devextreme-angular';
import { InventorysystemService } from '../../app/Inventorysystem/service/Inventorysystem.service';
import { SupplierComponent } from './Setup/supplier/supplier.component';
import { PurchaseInvoiceComponent } from './Purchase/purchase-invoice/purchase-invoice.component';
import { PurchaseOrderComponent } from './Purchase/purchase-order/purchase-order.component';
import { SalesReturnComponent } from './Sales/sales-return/sales-return.component';
import { GoodsreceiptComponent } from './Purchase/goodsreceipt/goodsreceipt.component';
import { UnitComponent } from './Setup/unit/unit.component';
import { InventoryItemComponent } from './Setup/inventory-item/inventory-item.component';
import { DeliveryOrderComponent } from './Sales/delivery-order/delivery-order.component';
import { SalesOrderComponent } from './Sales/sales-order/sales-order.component';
import { ProductPackSizeComponent } from './Setup/product-pack-size/product-pack-size.component';
import { ProductPackCategoryComponent } from './Setup/product-pack-category/product-pack-category.component';
import { ProductPackTypeComponent } from './Setup/product-pack-type/product-pack-type.component';
import { ProductTypeComponent } from './Setup/product-type/product-type.component';
import { SalesIndentComponent } from './Sales/sales-indent/sales-indent.component';
import { CustomerSetupComponent } from './Setup/customer-setup/customer-setup.component';
import { CustomerBankComponent } from './Setup/customer-bank/customer-bank.component';
import { CustomerAccountComponent } from './Setup/customer-account/customer-account.component';
import { CustomerTypeComponent } from './Setup/customer-type/customer-type.component';
import { BrandComponent } from './Setup/brand/brand.component';
import { ComissionComponent } from './Setup/comission/comission.component';
import { CustomerPricePickLevelComponent } from './Setup/customer-price-pick-level/customer-price-pick-level.component';
import { CustomerWarehouseComponent } from './Setup/customer-warehouse/customer-warehouse.component';
import { DistributorComponent } from './Setup/distributor/distributor.component';
import { InventoryComponent } from './Setup/inventory/inventory.component';
import { InventoryItemCategoryComponent } from './Setup/inventory-item-category/inventory-item-category.component';
import { ItemPriceStructureComponent } from './Setup/item-price-structure/item-price-structure.component';
import { ModeOfPaymentComponent } from './Setup/mode-of-payment/mode-of-payment.component';
import { PackageTypeComponent } from './Setup/package-type/package-type.component';
import { RegionComponent } from './Setup/region/region.component';
import { ReturnReasonComponent } from './Setup/return-reason/return-reason.component';
import { SalesPersonComponent } from './Setup/sales-person/sales-person.component';
import { TaxComponent } from './Setup/tax/tax.component';
import { TerritoryComponent } from './Setup/territory/territory.component';
import { TransportComponent } from './Setup/transport/transport.component';
import { PurchaseIndentComponent } from './Purchase/purchase-indent/purchase-indent.component';
import { PurchaseIndentItemComponent } from './Purchase/purchase-indent-item/purchase-indent-item.component';
import { PurchaseOrderItemComponent } from './Purchase/purchase-order-item/purchase-order-item.component';
import { PurchaseReturnComponent } from './Purchase/purchase-return/purchase-return.component';
import { PurchaseReturnItemComponent } from './Purchase/purchase-return-item/purchase-return-item.component';
import { SalesIndentItemComponent } from './Sales/sales-indent-item/sales-indent-item.component';
import { SalesReturnItemComponent } from './Sales/sales-return-item/sales-return-item.component';
import { DeliveryOrderItemComponent } from './Sales/delivery-order-item/delivery-order-item.component';
import { SalesInvoiceComponent } from './Sales/sales-invoice/sales-invoice.component';
import { SalesOrderItemComponent } from './Sales/sales-order-item/sales-order-item.component';
import { AreaComponent } from './Setup/area/area.component';
import { DeliveryNoteComponent } from './Sales/delivery-note/delivery-note.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        DxButtonModule,
        DevExtremeModule,
        DxDataGridModule,
    ],
    declarations: [

        RootComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
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
        DeliveryNoteComponent
    ],
    providers: [
        //  UserService,
        InventorysystemService
    ]
})
export class InventorysystemModule { }
