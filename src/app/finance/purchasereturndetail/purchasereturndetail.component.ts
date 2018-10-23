import { Component, OnInit } from '@angular/core';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { Router } from '@angular/router';
import { FinanceService } from '../../core/Services/Finance/finance.service';

@Component({
  selector: 'app-purchasereturndetail',
  templateUrl: './purchasereturndetail.component.html',
  styleUrls: ['./purchasereturndetail.component.scss']
})
export class PurchasereturndetailComponent implements OnInit {

  public PurchaseDetail: any;
  public PurchaseInvoice: any;
  public purchasereturn: any;
  public detailAccount: any;
  public purchaseReturnId: any;

  constructor(public financeSetupService: FinanceSetupService, public router: Router, public financeService: FinanceService) { }

  async ngOnInit() {

    this.PurchaseInvoice = await this.financeService.getPurchaseInvoices();
   
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
          onClick: this.addPurchaseReturn.bind(this)
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

  addPurchaseReturn() {
    this.router.navigate(['/finance/purchase-return']);
  }

  getCurrentRowData(d) {
    this.purchaseReturnId = d.key;
    console.log(this.purchaseReturnId);
    this.router.navigate(['finance/update-purchase-return/' + this.purchaseReturnId]);
  }

}