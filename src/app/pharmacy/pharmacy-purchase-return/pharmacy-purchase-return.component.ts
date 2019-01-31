import { Component, OnInit } from '@angular/core';
import { PharmacyService, AuthService } from '../../core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pharmacy-purchase-return',
  templateUrl: './pharmacy-purchase-return.component.html',
  styleUrls: ['./pharmacy-purchase-return.component.css']
})
export class PharmacyPurchaseReturnComponent implements OnInit {

  public InventoryItems : any[] = [];
  public SelectedGRN : any;
  // public Suppliers : any[] = [];
  public Supplier : any;
  // public SelectedSupplier : any;
  public ReturnReasons : any[] = [];

  public TotalReturnQuantity : number = 0;
  public TotalRefundAmount : number = 0;
  public CurrentDate : Date = new Date((new Date()).toLocaleString());

  public Datasource : any[] = [];

  public PurchaseReturnForm : FormGroup;

  constructor(public PharmacyService : PharmacyService, public Auth : AuthService, public Toastr : ToastrService, public Formbuilder : FormBuilder) {
    this.PurchaseReturnForm = this.Formbuilder.group({
      ReturnNumber : [''],
      ReturnDate : [''],
      GRNNumber : [''],
      GRNDate : [''],
      TotalPurchasedQuantity : [''],
      TotalPaidAmount : [''],
      SupplierCode : [''],
      SupplierName : [''],
      SupplierContact : [''],
      Remarks : [''],
      TotalReturnQuantity : [''],
      TotalRefundAmount : [''],
      ReturnReasonId : []
    });
  }

  ngOnInit() {
    this.PharmacyService.GetInventoryItemsArray().subscribe((res : any[]) => {
      this.InventoryItems = res;
      console.log(this.InventoryItems);
    });

    // this.PharmacyService.GetInventoryItemsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) => {
    //   this.InventoryItems = res;
    // });

    this.PharmacyService.GetReturnReasons().subscribe((res : any[]) => {
      this.ReturnReasons = res;
    });

    // this.PharmacyService.GetReturnReasonsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) => {
    //   this.ReturnReasons = res;
    // });
  }

  GetGrnDetails(code : string, event) {
    if (event.key === "Enter") {
      this.ResetWholeForm();
      this.PharmacyService.GetGrnDetailsWithSupplierByCode(code).subscribe((res : any) => {
      // this.PharmacyService.GetGrnDetailsWithSupplierByCodeAndCompany(code, this.Auth.getUserCompanyId()).subscribe((res : any) => {
        if(res != null) {
          this.SelectedGRN = res.grn;
          this.Supplier = res.supplier;
          this.Toastr.success("Details retrieved");
          this.SelectedGRN.grnItems.forEach(element => {
            var a : any = {
              inventoryItemId : element.inventoryItemId,
              rate : element.rate,
              packSize : element.packSize,
              purchaseQuantity : element.receivedQuantity,
              paidAmount : element.paymentAmount,
              returnQuantity : 0,
              refundAmount : 0
            };
            this.Datasource.push(a);
          });
        } else {
          this.Toastr.error('Inavlid GRN Number OR Return already exists for selected GRN!', 'Error!');
        }
      });
    }
  }

  UpdatingItem(event) {
    if(event.newData.returnQuantity) {
      event.newData.refundAmount = event.newData.returnQuantity * event.oldData.rate * event.oldData.packSize;
      this.TotalReturnQuantity = this.TotalReturnQuantity - event.oldData.returnQuantity + event.newData.returnQuantity;
      this.TotalRefundAmount = this.TotalRefundAmount - (event.oldData.refundAmount) + (event.newData.refundAmount);
    }
  }

  submitReturn(formvalue) {

    this.Datasource.filter(a => {
      delete a.rate;
      delete a.packSize;
      delete a.purchaseQuantity;
      delete a.paidAmount;
    });

    let a : any = {
      CompanyId : this.Auth.getUserCompanyId(),
      ReturnDate : formvalue.ReturnDate || this.CurrentDate,
      Remarks : formvalue.Remarks,
      TotalReturnAmount : this.TotalRefundAmount,
      TotalReturnQuantity : this.TotalReturnQuantity,
      ReturnReasonId : Number.parseInt(formvalue.ReturnReasonId),
      GRNId : this.SelectedGRN.grnId,
      PurchaseReturnItems : this.Datasource
    }

    console.log(a);

    this.PharmacyService.addPurchaseReturn(a).subscribe((res : any) => {
      this.Toastr.success("Return Added");
      this.ResetWholeForm();
    });
  }

  ResetWholeForm() {
    this.PurchaseReturnForm.reset();
    this.Supplier = null;
    this.SelectedGRN = null;
    this.TotalRefundAmount = 0;
    this.TotalReturnQuantity = 0;
    this.Datasource = [];
  }

}
