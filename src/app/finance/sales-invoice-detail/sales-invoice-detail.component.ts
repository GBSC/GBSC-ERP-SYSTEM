import { Component, OnInit, Input } from '@angular/core';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { Router } from '@angular/router';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-sales-invoice-detail',
    templateUrl: './sales-invoice-detail.component.html',
    styleUrls: ['./sales-invoice-detail.component.scss']
})
export class SalesInvoiceDetailComponent implements OnInit {

    public InvoiceDetail: any;
    public updatingSalesinvoiceDetail: any;
    public SalesReturn: any;
    public salesInvoice: any;
    public salesInvoiceForm: any;
    public updatingSalesinvoice: any;
    public detailAccount: any;
    public salesInvoiceId: any;

    constructor(public fb: FormBuilder, public financeSetupService: FinanceSetupService, public router: Router, public financeService: FinanceService) { }

    async ngOnInit() {

        this.salesInvoice = await this.financeService.getSalesInvoices();

    }

    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift(
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'add',
                    onClick: this.addSalesInvoice.bind(this)
                }
            });
    }


    contentReady(e) {
        if (!e.component.getSelectedRowKeys().length)
            e.component.selectRowsByIndexes(-1);
    }

    selectionChanged(e) {
        e.component.collapseAll(-0);
        e.component.expandRow(e.currentSelectedRowKeys[0]);
    }

    addSalesInvoice() {
        this.router.navigate(['/finance/sales-invoice']);
    }

    getCurrentRowData(d) {
        this.salesInvoiceId = d.key;
        console.log(this.salesInvoiceId);

        this.router.navigate(['finance/update-sales-invoice/' + this.salesInvoiceId]);
    }

}