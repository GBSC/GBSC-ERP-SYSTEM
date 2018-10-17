import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { PurchaseReturnDetail } from '../../core/Models/Finance/purchaseReturnDetail';
import { PurchaseReturn } from '../../core/Models/Finance/purchaseReturn';

@Component({
  selector: 'app-purchase-return',
  templateUrl: './purchase-return.component.html',
  styleUrls: ['./purchase-return.component.scss']
})
export class PurchaseReturnComponent implements OnInit {

  public PurchaseDetail: any;
  public PurchaseInvoice: any;
  public purchasereturn: any; 
  public detailAccount: any;
  public PurchaseReturnForm: any;
  public purchaseReturnDetail: PurchaseReturnDetail[];

  constructor(private fb: FormBuilder, public financeSetupService: FinanceSetupService,
    public financeService: FinanceService) { }

  async ngOnInit() {

    this.purchaseReturnDetail = [];

    this.PurchaseReturnForm = this.fb.group({

      BillNumber: [''],
      Date: [''],
      Description: [''],
      CreditDays: [''],
      VoucherNumber: [''],
      InvoiceNumber: [''],
      Expenses: [''],
      GstAmount: [''],
      GstPercentage: [''],
      DiscountAmount: [''],
      DiscountPercentage: [''],
      TaxPercentage: [''],
      TaxAmount: [''],
      WithholdingTaxPercentage: [''],
      WihtholdingTaxAmount: [''],
      TotalAmount: [''],
      FinancePurchaseInvoiceId: [''],
      DetailAccountId: ['']

    })

    this.purchasereturn = await this.financeService.getPurchaseReturns();
    
    this.PurchaseDetail = await this.financeService.getPurchaseReturnDetails();
   
    this.PurchaseInvoice = await this.financeService.getPurchaseInvoices();

    this.detailAccount = await this.financeSetupService.getDetailAccounts();
  }

  async addpurchaseReturnDetail(value) {
    let data = value.data;
    await this.purchaseReturnDetail.push(data);
  }

  async addPurchaseReturn(value) {
    let purchasereturndetail = new PurchaseReturn();
    purchasereturndetail= { ...purchasereturndetail, ...value };
    purchasereturndetail.FinancePurchaseReturnDetails = this.purchaseReturnDetail;
     await this.financeService.addPurchaseReturn(purchasereturndetail);     
  }

}