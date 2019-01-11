import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../../core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-general-sku',
  templateUrl: './general-sku.component.html',
  styleUrls: ['./general-sku.component.css']
})
export class GeneralSkuComponent implements OnInit {

  public skus : any[] = [];
  public UpdatedModel : any;

  constructor(public inventory : InventorysystemService, public auth : AuthService, public toastr : ToastrService) { }

  ngOnInit() {
    this.inventory.getGeneralSkusByCompany(this.auth.getUserCompanyId()).subscribe((res : any[]) => {
      this.skus = res;
      // console.log(this.skus);
    });
  }

  addSKU(value) {
    // console.log(value);
    value.data.companyId = this.auth.getUserCompanyId();

    this.inventory.addGeneralSku(value.data).subscribe(
      res => {
        this.toastr.success("Saved");
        this.inventory.getGeneralSkusByCompany(this.auth.getUserCompanyId()).subscribe((res : any[]) => {
          this.skus = res;
          // console.log(this.skus);
        });
      },
      err => this.toastr.error("Error!")
    );
  }

  updatingModel(value) {
    // console.log(value);
    this.UpdatedModel = { ...value.oldData, ...value.newData};
    // console.log(this.UpdatedModel);
  }

  updateSKU() {
    this.inventory.updateGeneralSku(this.UpdatedModel).subscribe(
        res => this.toastr.success("Success"),
        err => this.toastr.error("Error!")
      );
  }

  deleteSKU(value) {
    // console.log(value.key);
    this.inventory.deleteGeneralSku(value.key.generalSKUId).subscribe(
      res => this.toastr.success("Deleted"),
      err => this.toastr.error("Error!!")
    );
  }

}
