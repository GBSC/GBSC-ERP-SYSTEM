import { Component, OnInit, Input } from '@angular/core';
import { SalesReturn } from '../../core/Models/Finance/salesReturn';
import { FormBuilder } from '@angular/forms';
import { FinanceService } from '../../core/Services/Finance/finance.service';
import { FinanceSetupService } from '../../core/Services/Finance/financeSetup.service';
import { SalesReturnDetail } from '../../core/Models/Finance/salesReturnDetail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sales-return',
  templateUrl: './sales-return.component.html',
  styleUrls: ['./sales-return.component.scss']
})
export class SalesReturnComponent implements OnInit {

  public ReturnDetail: any[] = [];
  public SalesInvoice: any;
  public salesReturn: any;
  public detailAccount: any;
  public salesReturnForm: any;
  public Return: any;
  public salesReturnDetail: SalesReturnDetail[];

  @Input('salesReturnId') id: number;
  
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, public financeSetupService: FinanceSetupService,
    public financeService: FinanceService) { }

  async ngOnInit() {

    this.salesReturnDetail = [];

    this.salesReturnForm = this.fb.group({

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
      FinanceSalesInvoiceId: [''],
      DetailAccountId: ['']

    })

    this.SalesInvoice = await this.financeService.getSalesInvoices();

    this.detailAccount = await this.financeSetupService.getDetailAccounts();

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    if (this.isUpdate() === true) {

      this.financeService.getSalesReturn(this.id).subscribe(resp => {

        this.Return = resp;
        this.ReturnDetail = this.Return.financeSalesReturnDetails;
        this.patchValues(this.Return);
      });
    }
  }

  isUpdate(): boolean {

    if (this.id > 0) {
      return true;
    }
    else
      return false;
  }

  async addsalesReturnDetail(value) {
    let data = value.data;
    this.salesReturnDetail.push(data);
  }

  async addsalesReturn(value) {
    let salesReturndetail = new SalesReturn();
    salesReturndetail = { ...salesReturndetail, ...value };
    salesReturndetail.FinanceSalesReturnDetails = this.salesReturnDetail;
    await this.financeService.addSalesReturn(salesReturndetail);    
  }

  async updatesalesReturnDetail(value) {
    console.log(value);
  }

  async update(value){
    value.financeSalesReturnId = this.id;
    value.financeSalesReturnDetails = this.ReturnDetail;
    console.log(value);
    this.financeService.updateSalesReturn(value).subscribe(resp => {
      console.log(resp);
      
    })
    

  }

  patchValues(salesreturn: any) {

    this.salesReturnForm.patchValue({

      Date: salesreturn.date,
      Description: salesreturn.description,
      BillNumber: salesreturn.billNumber,
      CreditDays: salesreturn.creditDays,
      VoucherNumber: salesreturn.voucherNumber,
      InvoiceNumber: salesreturn.invoiceNumber,
      Expenses: salesreturn.expenses,
      GstAmount: salesreturn.gstAmount,
      GstPercentage: salesreturn.gstPercentage,
      DiscountAmount: salesreturn.discountAmount,
      DiscountPercentage: salesreturn.discountPercentage,
      TaxPercentage: salesreturn.taxPercentage,
      TaxAmount: salesreturn.taxAmount,
      WithholdingTaxPercentage: salesreturn.withholdingTaxPercentage,
      WihtholdingTaxAmount: salesreturn.wihtholdingTaxAmount,
      TotalAmount: salesreturn.totalAmount,
      FinanceSalesInvoiceId: salesreturn.financeSalesInvoiceId,
      DetailAccountId: salesreturn.detailAccountId

    })

  }
}