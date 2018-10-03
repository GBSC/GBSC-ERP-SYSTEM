import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AddnewsupplierComponent } from './addnewsupplier/addnewsupplier.component';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';
import { CategoryComponent } from './category/category.component';
import { GoodsreceiptComponent } from './goodsreceipt/goodsreceipt.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { IssuanceComponent } from './issuance/issuance.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { UnitComponent } from './unit/unit.component';
import { ReturnmedicineComponent } from './returnmedicine/returnmedicine.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'pharmacy',
    component: RootComponent,

    children: [
        { path: '', component: HomeComponent },
        { path: 'home', component: HomeComponent },
        { path: 'supplier', component: AddnewsupplierComponent},
        { path: 'category', component: CategoryComponent},
        { path: 'grn', component: GoodsreceiptComponent},
        { path: 'item', component: InventoryItemComponent},
        { path: 'issuance', component: IssuanceComponent},
        { path: 'itemdetail', component: ItemdetailComponent},
        { path: 'purchaseorder', component: PurchaseOrderComponent},
        { path: 'return', component: ReturnmedicineComponent},
        { path: 'unit', component: UnitComponent}
    ]
  }
]);

