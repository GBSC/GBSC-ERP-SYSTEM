import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { HomeComponent } from '../Inventorysystem/home/home.component';
import { SupplierComponent } from '../Inventorysystem/supplier/supplier.component';
import { PurchseInvoiceComponent } from '../Inventorysystem/purchse-invoice/purchse-invoice.component';
import { PurchaseOrderComponent } from '../Inventorysystem/purchase-order/purchase-order.component';
import { SalesReturnComponent } from '../Inventorysystem/sales-return/sales-return.component';
import { IssuanceComponent } from '../Inventorysystem/issuance/issuance.component';
import { GoodsreceiptComponent } from '../Inventorysystem/goodsreceipt/goodsreceipt.component';
import { ItemdetailComponent } from '../Inventorysystem/itemdetail/itemdetail.component';
import { UnitComponent } from '../Inventorysystem/unit/unit.component';
import { CategoryComponent } from '../Inventorysystem/category/category.component';
import { InventoryItemComponent } from '../Inventorysystem/inventory-item/inventory-item.component';
import { ReturnmedicineComponent } from '../Inventorysystem/returnmedicine/returnmedicine.component';
import { AddnewsupplierComponent } from '../Inventorysystem/addnewsupplier/addnewsupplier.component';
import { DeliveryOrderComponent } from '../Inventorysystem/delivery-order/delivery-order.component';

export const routing: ModuleWithProviders = RouterModule.forChild([



    {
        path: 'Inventorysystem',
        component: RootComponent,

        children: [

            { path: 'home', component: HomeComponent },
            { path: 'supplier', component: SupplierComponent },
            { path: 'purchseInvoice', component: PurchseInvoiceComponent },
            { path: 'purchseOrder', component: PurchaseOrderComponent },
            { path: 'salesReturn', component: SalesReturnComponent },
            { path: 'returnmedicine', component: ReturnmedicineComponent },
            { path: 'issuance', component: IssuanceComponent },
            { path: 'itemdetail', component: ItemdetailComponent },
            { path: 'addnewsupplier', component: AddnewsupplierComponent },
            { path: 'unit', component: UnitComponent },
            { path: 'category', component: CategoryComponent },
            { path: 'inventoryitem', component: InventoryItemComponent },
            { path: 'DeliveryOrder', component: DeliveryOrderComponent },
            { path: 'goodsreceipt', component: GoodsreceiptComponent }

        ]
    }

]);
