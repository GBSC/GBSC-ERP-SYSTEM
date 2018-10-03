import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pharmacy-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DevExtremeModule, DxDataGridModule } from 'devextreme-angular';
import { PharmacyService } from './service/pharmacy.service';
import { CategoryComponent } from './category/category.component';
import { GoodsreceiptComponent } from './goodsreceipt/goodsreceipt.component';
import { AddnewsupplierComponent } from './addnewsupplier/addnewsupplier.component';
import { HomeComponent } from './home/home.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { ReturnmedicineComponent } from './returnmedicine/returnmedicine.component';
import { RootComponent } from './root/root.component';
import { SupplierComponent } from './supplier/supplier.component';
import { UnitComponent } from './unit/unit.component';
import { IssuanceComponent } from './issuance/issuance.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from '../LowerCaseUrlSerializer';

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
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    RootComponent,
    AddnewsupplierComponent,
    CategoryComponent,
    GoodsreceiptComponent,
    HomeComponent,
    InventoryItemComponent,
    IssuanceComponent,
    ItemdetailComponent,
    PurchaseOrderComponent,
    ReturnmedicineComponent,
    RootComponent,
    SupplierComponent,
    UnitComponent
  ],
  providers: [
    {
      provide: UrlSerializer,
      useClass: LowerCaseUrlSerializer
  },
    PharmacyService
  ]
})
export class PharmacyModule { }
