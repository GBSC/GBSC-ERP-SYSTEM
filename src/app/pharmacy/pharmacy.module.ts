import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pharmacy.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DevExtremeModule, DxDataGridModule } from 'devextreme-angular';
import { GoodsreceiptComponent } from './goodsreceipt/goodsreceipt.component';
import { HomeComponent } from './home/home.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { ReturnmedicineComponent } from './returnmedicine/returnmedicine.component';
import { RootComponent } from './root/root.component';
import { IssuanceComponent } from './issuance/issuance.component';
import { MenuComponent } from './shared/menu/menu.component';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from '../LowerCaseUrlSerializer';
import { ReturnmedicineDetailComponent } from './returnmedicine-detail/returnmedicine-detail.component';
import { PurchaseOrderDetailsComponent } from './purchase-order-details/purchase-order-details.component';
import { IssuanceDetailComponent } from './issuance-detail/issuance-detail.component';
import { InventoryComponent } from './Setup/inventory/inventory.component';
import { PackageTypeComponent } from './Setup/package-type/package-type.component';
import { ProductPackCategoryComponent } from './Setup/product-pack-category/product-pack-category.component';
import { ProductPackSizeComponent } from './Setup/product-pack-size/product-pack-size.component';
import { ProductPackTypeComponent } from './Setup/product-pack-type/product-pack-type.component';
import { ProductTypeComponent } from './Setup/product-type/product-type.component';
import { ReturnReasonComponent } from './Setup/return-reason/return-reason.component';
import { SupplierComponent } from './Setup/supplier/supplier.component';
import { UnitComponent } from './Setup/unit/unit.component';
import { InventoryItemCategoryComponent } from './Setup/inventory-item-category/inventory-item-category.component';
import { InventoryItemComponent } from './Setup/inventory-item/inventory-item.component';
import { IssuanceViewComponent } from './issuance-view/issuance-view.component';
import { ReturnViewComponent } from './return-view/return-view.component';
import { GrnViewComponent } from './grn-view/grn-view.component';
import { PurhcaseorderViewComponent } from './purhcaseorder-view/purhcaseorder-view.component';
import { CurrencyComponent } from './Setup/currency/currency.component';
import { PrescriptionViewComponent } from './prescription-view/prescription-view.component';
import { InternalRequisitionComponent } from './internal-requisition/internal-requisition.component';
import { InternalRequisitionViewComponent } from './internal-requisition-view/internal-requisition-view.component';
import { PurchaseInvoiceComponent } from './purchase-invoice/purchase-invoice.component';

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
        HomeComponent,
        MenuComponent,
        RootComponent,
        GoodsreceiptComponent,
        IssuanceComponent,
        IssuanceDetailComponent,
        PurchaseOrderComponent,
        PurchaseOrderDetailsComponent,
        ReturnmedicineComponent,
        ReturnmedicineDetailComponent,
        InventoryComponent,
        InventoryItemCategoryComponent,
        InventoryItemComponent,
        PackageTypeComponent,
        ProductPackCategoryComponent,
        ProductPackSizeComponent,
        ProductPackTypeComponent,
        ProductTypeComponent,
        ReturnReasonComponent,
        SupplierComponent,
        UnitComponent,
        IssuanceViewComponent,
        ReturnViewComponent,
        GrnViewComponent,
        PurhcaseorderViewComponent,
        CurrencyComponent,
        PrescriptionViewComponent,
        InternalRequisitionComponent,
        InternalRequisitionViewComponent,
        PurchaseInvoiceComponent
    ],
    providers: [
        {
            provide: UrlSerializer,
            useClass: LowerCaseUrlSerializer
        },
    ]
})
export class PharmacyModule { }
