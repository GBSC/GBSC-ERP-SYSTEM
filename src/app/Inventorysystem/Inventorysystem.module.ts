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
import { SupplierComponent } from './supplier/supplier.component';
import { PurchseInvoiceComponent } from './purchse-invoice/purchse-invoice.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { SalesReturnComponent } from './sales-return/sales-return.component';
import { IssuanceComponent } from './issuance/issuance.component';
import { ReturnmedicineComponent } from './returnmedicine/returnmedicine.component';
import { GoodsreceiptComponent } from './goodsreceipt/goodsreceipt.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { AddnewsupplierComponent } from './addnewsupplier/addnewsupplier.component';
import { UnitComponent } from './unit/unit.component';
import { CategoryComponent } from './category/category.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { DeliveryOrderComponent } from './delivery-order/delivery-order.component';

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
        SupplierComponent,
        PurchseInvoiceComponent,
        PurchaseOrderComponent,
        SalesReturnComponent,
        IssuanceComponent,
        ReturnmedicineComponent,
        FooterComponent,
        HeaderComponent,
        MenuComponent,
        GoodsreceiptComponent,
        ItemdetailComponent,
        AddnewsupplierComponent,
        UnitComponent,
        CategoryComponent,
        InventoryItemComponent,
        DeliveryOrderComponent

    ],
    providers: [
        InventorysystemService
    ]
})
export class InventorysystemModule { }
