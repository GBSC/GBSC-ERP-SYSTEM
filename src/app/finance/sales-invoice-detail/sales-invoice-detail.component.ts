import { Component, OnInit } from '@angular/core';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { Router } from '@angular/router';
import { FinanceService } from '../../core/Services/Finance/finance.service';

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
  public updatingSalesinvoice: any;
  public detailAccount: any;
  
  constructor(public financeSetupService: FinanceSetupService, public router: Router, public financeService: FinanceService) { }

  async ngOnInit() {

    this.salesInvoice = await this.financeService.getSalesInvoices();

    this.InvoiceDetail = await this.financeService.getSalesInvoiceDetails();

    this.SalesReturn = await this.financeService.getSalesReturns();

    this.detailAccount = await this.financeSetupService.getDetailAccounts();
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
  
  updatingsalesInvoice(value){
    console.log(value);
    this.updatingSalesinvoice = { ...value.oldData, ...value.newData};
    console.log(this.updatingSalesinvoice);
    console.log(value); 
  }

  async fetchData(d){
    console.log(d.key);
    this.router.navigate(['/finance/sales-invoice/'+ d.key]);
    }

  async updatesalesInvoice(){
   let x = await this.financeService.updateSalesInvoice(this.updatingSalesinvoice);
   console.log(x);
  }

  async addsalesInvoiceDetail(value){
    await this.financeService.addSalesInvoiceDetail(value.data);
    
   }

  async updatingsalesInvoiceDetail(value){

    this.updatingSalesinvoiceDetail = { ...value.newData, ...value.oldData};
    console.log(this.updatingSalesinvoice);
     
  }

  async updatesalesInvoiceDetail(){
   await this.financeService.updateSalesInvoiceDetail(this.updatingSalesinvoiceDetail);
   
  }

}