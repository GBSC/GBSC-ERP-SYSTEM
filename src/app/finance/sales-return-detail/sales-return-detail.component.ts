import { Component, OnInit } from '@angular/core';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-return-detail',
  templateUrl: './sales-return-detail.component.html',
  styleUrls: ['./sales-return-detail.component.scss']
})
export class SalesReturnDetailComponent implements OnInit {

  public PurchaseDetail: any;
  public SalesInvoice: any;
  public salesReturn: any;
  public detailAccount: any;

  constructor(public financeSetupService: FinanceSetupService, public router: Router, public financeService: FinanceService) { }

  async ngOnInit() {

     this.salesReturn = await this.financeService.getSalesReturns();

    this.PurchaseDetail = await this.financeService.getSalesReturnDetails();

    this.SalesInvoice = await this.financeService.getSalesInvoices();

    this.detailAccount = await this.financeSetupService.getDetailAccounts();
  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift(
      {
        location: 'after',
        widget: 'dxButton',
        options: {
          icon: 'add',
          onClick: this.addSalesReturn.bind(this)
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

  addSalesReturn() {
    this.router.navigate(['/finance/sales-return']);
  }
}