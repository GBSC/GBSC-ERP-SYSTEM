import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanysetupComponent } from './companysetup/companysetup.component';
import { FinancialyearComponent } from './financialSetups/financialyear/financialyear.component';
import { VouchertypeComponent } from './financialSetups/vouchertype/vouchertype.component';
import { SubAccountComponent } from './financialSetups/sub-account/sub-account.component';
import { SecondSubAccountComponent } from './financialSetups/second-sub-account/second-sub-account.component';
import { MasterAccountComponent } from './financialSetups/master-account/master-account.component';
import { DetailAccountComponent } from './financialSetups/detail-account/detail-account.component';
import { SalesInvoiceComponent } from './sales-invoice/sales-invoice.component';
import { SalesReturnComponent } from './sales-return/sales-return.component';
import { VoucherComponent } from './voucher/voucher.component';
import { PurchaseInvoiceComponent } from './purchase-invoice/purchase-invoice.component';
import { PurchaseReturnComponent } from './purchase-return/purchase-return.component';

export const routing: ModuleWithProviders = RouterModule.forChild([

    {
        path: 'finance',
        component: RootComponent,

        children: [
            {
                path: 'setup',
                children: [

                    { path: 'companysetup', component: CompanysetupComponent },
                    { path: 'masteraccount', component: MasterAccountComponent },
                    { path: 'detailaccount', component: DetailAccountComponent },
                    { path: 'financialyear', component: FinancialyearComponent },
                    { path: 'vouchertype', component: VouchertypeComponent },
                    { path: 'controlaccount', component: SubAccountComponent },
                    { path: 'secondsubaccount', component: SecondSubAccountComponent }

                ]
            },
            { path: 'purchase-invoice', component: PurchaseInvoiceComponent },
            { path: 'purchase-return', component: PurchaseReturnComponent },
            { path: 'sales-invoice', component: SalesInvoiceComponent },
            { path: 'sales-return', component: SalesReturnComponent },
            { path: 'voucher', component: VoucherComponent }

        ]
    }

]);
