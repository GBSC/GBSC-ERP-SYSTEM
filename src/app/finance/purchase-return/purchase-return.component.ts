import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { PurchaseReturnDetail } from '../../core/Models/Finance/purchaseReturnDetail';
import { PurchaseReturn } from '../../core/Models/Finance/purchaseReturn';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase-return',
  templateUrl: './purchase-return.component.html',
  styleUrls: ['./purchase-return.component.scss']
})
export class PurchaseReturnComponent implements OnInit {

  public PurchaseDetail: any[] = [];
  public PurchaseInvoice: any;
  public purchasereturn: any; 
  public detailAccount: any;
  public PurchaseReturn: any;
  public PurchaseReturnForm: any;
  public purchaseReturnDetail: PurchaseReturnDetail[];

  @Input('purchaseReturnId') id: number;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, public financeSetupService: FinanceSetupService,
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
   
    this.PurchaseInvoice = await this.financeService.getPurchaseInvoices();

    this.detailAccount = await this.financeSetupService.getDetailAccounts();

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    if (this.isUpdate() === true) {

      this.financeService.getPurchaseReturn(this.id).subscribe(resp => {

        this.PurchaseReturn = resp;
        this.PurchaseDetail = this.PurchaseReturn.financePurchaseReturnDetails; 
        this.patchValues(this.PurchaseReturn);
      });
    }

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

  isUpdate(): boolean {

    if (this.id > 0) {
      return true;
    }
    else
      return false;
  }

  async updatepurchaseReturnDetail(value) {
    console.log(value);
  }

  async update(value){

    value.FinancePurchaseReturnId = this.id;
    value.FinancePurchaseReturnDetails = this.PurchaseDetail;
    console.log(value);
    this.financeService.updatePurchaseReturn(value).subscribe(resp=>{
      console.log(resp);
    })
  }

  patchValues(purchasereturn: any) {

    this.PurchaseReturnForm.patchValue({

      Date: purchasereturn.date,
      Description: purchasereturn.description,
      BillNumber: purchasereturn.billNumber,
      CreditDays: purchasereturn.creditDays,
      VoucherNumber: purchasereturn.voucherNumber,
      InvoiceNumber: purchasereturn.invoiceNumber,
      Expenses: purchasereturn.expenses,
      GstAmount: purchasereturn.gstAmount,
      GstPercentage: purchasereturn.gstPercentage,
      DiscountAmount: purchasereturn.discountAmount,
      DiscountPercentage: purchasereturn.discountPercentage,
      TaxPercentage: purchasereturn.taxPercentage,
      TaxAmount: purchasereturn.taxAmount,
      WithholdingTaxPercentage: purchasereturn.withholdingTaxPercentage,
      WihtholdingTaxAmount: purchasereturn.wihtholdingTaxAmount,
      TotalAmount: purchasereturn.totalAmount,
      FinancePurchaseInvoiceId: purchasereturn.financePurchaseInvoiceId,
      DetailAccountId: purchasereturn.detailAccountId

    })

  }

}