import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './pharmacy.routing';
import { RootComponent } from './root/root.component';

import { HomeComponent } from './home/home.component';



import { SupplierComponent } from './supplier/supplier.component';
import { PurchseInvoiceComponent } from './purchse-invoice/purchse-invoice.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { SalesReturnComponent } from './sales-return/sales-return.component';
import { IssuanceComponent } from './issuance/issuance.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        routing,

    ],
    declarations: [

        RootComponent,
        HomeComponent,
        SupplierComponent,
        PurchseInvoiceComponent,
        PurchaseOrderComponent,
        SalesReturnComponent,
        IssuanceComponent
    ],

    providers: []
})
export class PharmacyModule { }
