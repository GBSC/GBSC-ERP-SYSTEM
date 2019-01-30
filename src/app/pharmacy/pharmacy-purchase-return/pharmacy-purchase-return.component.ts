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
  public Suppliers : any[] = [];
  public SelectedSupplier : any;
  public ReturnReasons : any[] = [];

  public TotalReturnQuantity : number = 0;
  public TotalRefundAmount : number = 0;
  public CurrentDate : Date = new Date((new Date()).toLocaleString());

  public Datasource : any;

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
      ReturnReasonId : ['']
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

    this.PharmacyService.GetSuppliers().subscribe((res : any[]) => {
      this.Suppliers = res;
    });

    // this.PharmacyService.GetSuppliersByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) => {
    //   this.Suppliers = res;
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
      // this.ResetGrid();
      this.PharmacyService.GetGrnDetailsByCode(code).subscribe((res : any) => {
        if(res != null) {
          this.SelectedGRN = res;
          console.log(this.SelectedGRN);
          this.Toastr.success("Details retrieved");
          // this.SelectedGRN.grnItems.forEach(element => {
          //   var a : any = {

          //   };
          // });
        } else {
          this.Toastr.error('Return already exists for selected GRN!', 'Error!');
        }
      });
    }
  }

}
