import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';
import { GoodsreceiptComponent } from './goodsreceipt/goodsreceipt.component';
import { IssuanceComponent } from './issuance/issuance.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { ReturnmedicineComponent } from './returnmedicine/returnmedicine.component';
import { InventoryComponent } from './Setup/inventory/inventory.component';
import { InventoryItemComponent } from './Setup/inventory-item/inventory-item.component';
import { InventoryItemCategoryComponent } from './Setup/inventory-item-category/inventory-item-category.component';
import { PackageTypeComponent } from './Setup/package-type/package-type.component';
import { ProductPackCategoryComponent } from './Setup/product-pack-category/product-pack-category.component';
import { ProductPackSizeComponent } from './Setup/product-pack-size/product-pack-size.component';
import { ProductPackTypeComponent } from './Setup/product-pack-type/product-pack-type.component';
import { ProductTypeComponent } from './Setup/product-type/product-type.component';
import { ReturnReasonComponent } from './Setup/return-reason/return-reason.component';
import { SupplierComponent } from './Setup/supplier/supplier.component';
import { UnitComponent } from './Setup/unit/unit.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'pharmacy',
    component: RootComponent,
    children: [
        { path: '', component: HomeComponent },
        { path: 'home', component: HomeComponent },
        { path: 'grn', component: GoodsreceiptComponent},
        { path: 'issuance', component: IssuanceComponent},
        { path: 'purchaseorder', component: PurchaseOrderComponent},
        { path: 'return', component: ReturnmedicineComponent},
        {
          path: "setup",
          children: [
              { path: 'inventorystock', component: InventoryComponent },
              { path: 'inventoryitem', component: InventoryItemComponent },
              { path: 'inventoryitemcategory', component: InventoryItemCategoryComponent },
              { path: 'packagetype', component: PackageTypeComponent },
              { path: 'productpackcategory', component: ProductPackCategoryComponent },
              { path: 'packsize', component: ProductPackSizeComponent },
              { path: 'packtype', component: ProductPackTypeComponent },
              { path: 'producttype', component: ProductTypeComponent },
              { path: 'returnreason', component: ReturnReasonComponent },
              { path: 'supplier', component: SupplierComponent },
              { path: 'unit', component: UnitComponent }
            ]
        }
    ]
  }
]);

