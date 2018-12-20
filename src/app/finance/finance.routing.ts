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
import { PurchaseinvoicedetailComponent } from './purchaseinvoicedetail/purchaseinvoicedetail.component';
import { PurchasereturndetailComponent } from './purchasereturndetail/purchasereturndetail.component';
import { SalesInvoiceDetailComponent } from './sales-invoice-detail/sales-invoice-detail.component';
import { SalesReturnDetailComponent } from './sales-return-detail/sales-return-detail.component';
import { VoucherDetailComponent } from './voucher-detail/voucher-detail.component';
import { CurrentTrailBalanceViewComponent } from './current-trail-balance-view/current-trail-balance-view.component';
import { DemoComponent } from './demo/demo.component';
import { UpdateVoucherComponent } from './update-voucher/update-voucher.component';
import { FinanceAccountComponent } from './finance-account/finance-account.component';

export const routing: ModuleWithProviders = RouterModule.forChild([

    {
        path: '',
        component: RootComponent,

        children: [
            {
                path: 'setup',
                children: [
                    { path: 'account', component: FinanceAccountComponent },
                    { path: 'companysetup', component: CompanysetupComponent },
                    { path: 'masteraccount', component: MasterAccountComponent },
                    { path: 'detailaccount', component: DetailAccountComponent },
                    { path: 'financialyear', component: FinancialyearComponent },
                    { path: 'vouchertype', component: VouchertypeComponent },
                    { path: 'controlaccount', component: SubAccountComponent },
                    { path: 'secondsubaccount', component: SecondSubAccountComponent },

                ]
            },
            { path: 'demo', component: DemoComponent },
            { path: 'purchase-invoice', component: PurchaseInvoiceComponent },
            { path: 'update-purchase-invoice/:id', component: PurchaseInvoiceComponent },
            { path: 'purchase-invoice-detail', component: PurchaseinvoicedetailComponent },
            { path: 'purchase-return', component: PurchaseReturnComponent },
            { path: 'update-purchase-return/:id', component: PurchaseReturnComponent },
            { path: 'purchase-return-detail', component: PurchasereturndetailComponent },
            { path: 'sales-invoice', component: SalesInvoiceComponent },
            { path: 'update-sales-invoice/:id', component: SalesInvoiceComponent },
            { path: 'sales-invoice-detail', component: SalesInvoiceDetailComponent },
            { path: 'sales-return', component: SalesReturnComponent },
            { path: 'update-sales-return/:id', component: SalesReturnComponent },
            { path: 'sales-return-detail', component: SalesReturnDetailComponent },
            { path: 'voucher', component: VoucherComponent },
             { path: 'update-voucher/:id', component: VoucherComponent }, 
             { path: 'currenttrailbalanceview', component: CurrentTrailBalanceViewComponent },
            { path: 'update-voucher/:id', component: UpdateVoucherComponent },
            { path: 'voucher-detail', component: VoucherDetailComponent }

        ]
    }

]);
