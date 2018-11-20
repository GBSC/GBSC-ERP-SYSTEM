import { Component, OnInit } from '@angular/core';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-purchaseinvoicedetail',
    templateUrl: './purchaseinvoicedetail.component.html',
    styleUrls: ['./purchaseinvoicedetail.component.scss']
})
export class PurchaseinvoicedetailComponent implements OnInit {

    public InvoiceDetail: any;
    public purchaseinvoice: any;
    public purchasereturn: any;
    public detailAccount: any;
    public purchaseInvoiceId: any;

    constructor(public financeSetupService: FinanceSetupService, public router: Router, public financeService: FinanceService) { }

    async ngOnInit() {

        this.purchaseinvoice = await this.financeService.getPurchaseInvoices();

        this.InvoiceDetail = await this.financeService.getPurchaseInvoiceDetails();

        this.purchasereturn = await this.financeService.getPurchaseReturns();

        this.detailAccount = await this.financeSetupService.getDetailAccounts();
    }

    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift(
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'add',
                    onClick: this.addPurchaseInvoice.bind(this)
                }
            });
    }


    contentReady(e) {
        if (!e.component.getSelectedRowKeys().length)
            e.component.selectRowsByIndexes(-1);
    }

    selectionChanged(e) {
        e.component.collapseAll(-1);
        e.component.expandRow(e.currentSelectedRowKeys[0]);
    }

    addPurchaseInvoice() {
        this.router.navigate(['/finance/purchase-invoice']);
    }

    getCurrentRowData(d) {
        this.purchaseInvoiceId = d.key;
        console.log(this.purchaseInvoiceId);
        this.router.navigate(['finance/update-purchase-invoice/' + this.purchaseInvoiceId]);
    }

}