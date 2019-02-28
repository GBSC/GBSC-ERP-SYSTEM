import { Component, OnInit } from '@angular/core';
import { AuthService, PharmacyService } from '../../core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.css']
})
export class PurchaseInvoiceComponent implements OnInit {

  public GRN : any;
  public GRNItems : any;
  public Currency : any;
  public PurchaseInvoiceForm : FormGroup;

  public Products : any;

  constructor(public PharmacyService : PharmacyService, public Auth : AuthService, public Toast : ToastrService, public formBuilder : FormBuilder, public toastr : ToastrService) {

    this.PurchaseInvoiceForm = this.formBuilder.group({
      GRNCode: [''],
      GRNDate: [''],
      GRNRemarks : [''],
      VendorBillNumber: [''],
      InvoiceDate: [''],
      CurrencyId:[''],
      PaymentAmount: [],
      ReceivedQuantity: []
    });

  }

  ngOnInit() {
    // this.PharmacyService.GetInventoryItemsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
    //   this.Products = res;
    //   console.log(this.Products);
    // });

    this.PharmacyService.GetInventoryItems().subscribe((res : any) => {
      this.Products = res;
      console.log(this.Products);
    });
    this.PharmacyService.GetCurrency().subscribe(res=>{
      this.Currency = res;
      console.log(this.Currency);
		})
  }

  getGRNDetails(code, keycode) {
    if (keycode.key == "Enter") {
        this.PharmacyService.GetGrnDetailsByCode(code).subscribe((res: any) => {
            if (res != null) {
                this.GRN = res;
                console.log("GRN", this.GRN);
                this.GRNItems = this.GRN.grnItems;
                console.log("SelectedPurchaseOrderItems", this.GRNItems);
            }
            else {
                this.Toast.error('Invoice already exists for selected GRN!', 'Error!');
            }
        });
    } else {
        this.Toast.info("Press enter to get GRN details");
    }
  }

  SubmitPIN(value) {
    console.log(value);
    var a : any = {
      CompanyId : this.Auth.getUserCompanyId(),
      InvoiceDate :  value.InvoiceDate ,
      GRNId : this.GRN.grnId,
      CurrencyId : value.CurrencyId,
      PurchaseOrderId : this.GRN.purchaseOrderId,
      VendorBillNumber : this.GRN.vendorBillNumber
    };
    console.log(a);

    // this.PharmacyService.AddPurchaseInvoice(a).subscribe(
    //   (res : any) => {
    //     this.toastr.success("Invoice Added");
    //     this.PurchaseInvoiceForm.reset();
    //     this.GRN = null;
    //     this.GRNItems = null;
    //   },
    //   (err : any) => this.toastr.error("Error!!")
    // );
  }

}
