import { Component, OnInit } from '@angular/core';
import { PharmacyService, AuthService } from '../../core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pharmacy-purchase-return',
  templateUrl: './pharmacy-purchase-return.component.html',
  styleUrls: ['./pharmacy-purchase-return.component.css']
})
export class PharmacyPurchaseReturnComponent implements OnInit {

  public InventoryItems : any[] = [];
  public SelectedGRN : any;

  constructor(public PharmacyService : PharmacyService, public Auth : AuthService, public Toastr : ToastrService) { }

  ngOnInit() {
    this.PharmacyService.GetInventoryItemsArray().subscribe((res : any[]) => {
      this.InventoryItems = res;
      console.log(this.InventoryItems);
    });

    // this.PharmacyService.GetInventoryItemsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) => {
    //   this.InventoryItems = res;
    // });
  }

  GetGrnDetails(code : string) {
    this.PharmacyService.GetGrnDetailsByCode(code).subscribe((res : any) => {
      this.SelectedGRN = res;
      console.log(this.SelectedGRN);
    });
  }

}
