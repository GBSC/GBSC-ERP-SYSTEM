import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './finance.routing';
import { RootComponent } from './root/root.component';
import { MenuComponent } from '../finance/shared/menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanysetupComponent } from './companysetup/companysetup.component';
import { DxButtonModule, DevExtremeModule, DxDataGridModule } from 'devextreme-angular';
import { FinanceSetupService } from '../core/Services/Finance/financeSetup.service';
import { MasterAccountComponent } from './financialSetups/master-account/master-account.component';
import { FinancialyearComponent } from './financialSetups/financialyear/financialyear.component';
import { VouchertypeComponent } from './financialSetups/vouchertype/vouchertype.component';
import { SubAccountComponent } from './financialSetups/sub-account/sub-account.component';
import { SecondSubAccountComponent } from './financialSetups/second-sub-account/second-sub-account.component';
import { DetailAccountComponent } from './financialSetups/detail-account/detail-account.component';
import { VoucherComponent } from './voucher/voucher.component';
import { PurchaseInvoiceComponent } from './purchase-invoice/purchase-invoice.component';
import { PurchaseReturnComponent } from './purchase-return/purchase-return.component';
import { SalesInvoiceComponent } from './sales-invoice/sales-invoice.component';
import { SalesReturnComponent } from './sales-return/sales-return.component';
import { FinanceService } from '../core/Services/Finance/finance.service';
import { PurchaseinvoicedetailComponent } from './purchaseinvoicedetail/purchaseinvoicedetail.component';
import { PurchasereturndetailComponent } from './purchasereturndetail/purchasereturndetail.component';
import { SalesInvoiceDetailComponent } from './sales-invoice-detail/sales-invoice-detail.component';
import { SalesReturnDetailComponent } from './sales-return-detail/sales-return-detail.component';
import { VoucherDetailComponent } from './voucher-detail/voucher-detail.component';
import { CurrentTrailBalanceViewComponent } from './current-trail-balance-view/current-trail-balance-view.component';
 
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DxButtonModule,
        DevExtremeModule,
        DxDataGridModule,
        routing,

    ],
    declarations: [

        RootComponent,
        DashboardComponent,
        MenuComponent,
        CompanysetupComponent,
        FinancialyearComponent,
        VouchertypeComponent,
        MasterAccountComponent,
        SubAccountComponent,
        SecondSubAccountComponent,
        DetailAccountComponent,
        VoucherComponent,
        PurchaseInvoiceComponent,
        PurchaseReturnComponent,
        SalesInvoiceComponent,
        SalesReturnComponent,
        PurchaseinvoicedetailComponent,
        PurchasereturndetailComponent,
        SalesInvoiceDetailComponent,
        SalesReturnDetailComponent,
        VoucherDetailComponent,
        CurrentTrailBalanceViewComponent,
         
    ],
    providers: [FinanceSetupService,FinanceService]
})
export class FinanceModule { }
