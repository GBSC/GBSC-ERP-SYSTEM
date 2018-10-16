import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './finance.routing';
import { RootComponent } from './root/root.component';
import { FooterComponent } from '../finance/shared/footer/footer.component';
import { HeaderComponent } from '../finance/shared/header/header.component';
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
        FooterComponent,
        HeaderComponent,
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
        SalesReturnComponent
    ],
    providers: [FinanceSetupService]
})
export class FinanceModule { }
