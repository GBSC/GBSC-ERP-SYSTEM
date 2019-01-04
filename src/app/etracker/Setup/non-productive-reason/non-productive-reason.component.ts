import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core';
import { StoreService } from '../../../core/Services/ETracker/store.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-non-productive-reason',
  templateUrl: './non-productive-reason.component.html',
  styleUrls: ['./non-productive-reason.component.css']
})
export class NonProductiveReasonComponent implements OnInit {

  public Reasons : any[] = [];
  public UpdatedModel : any;

  constructor(public auth : AuthService, public storevisit : StoreService, public toastr : ToastrService) {

  }

  ngOnInit() {
    this.storevisit.getNonproductiveStoreVisitReasonsByCompany(this.auth.getUserCompanyId()).subscribe((res : any[]) => {
      this.Reasons = res;
      console.log(this.Reasons);
    });
  }

  addReason(value) {
    console.log(value);
    value.data.companyId = this.auth.getUserCompanyId();

    this.storevisit.addNonProductiveStoreVisitReason(value.data).subscribe(
      res => {
        this.toastr.success("Saved");
        this.storevisit.getNonproductiveStoreVisitReasonsByCompany(this.auth.getUserCompanyId()).subscribe((res : any[]) => {
          this.Reasons = res;
        });
      },
      err => this.toastr.error("Error!")
    );
  }

  updatingModel(value) {
    console.log(value);
    this.UpdatedModel = { ...value.oldData, ...value.newData};
    console.log(this.UpdatedModel);
  }

  updateReason() {
    this.storevisit.updateNonProductiveStoreVisitReason(this.UpdatedModel).subscribe(
        res => this.toastr.success("Success"),
        err => this.toastr.error("Error!")
      );
  }

  deleteReason(value) {
    console.log(value.key);
    this.storevisit.deleteNonProductiveStoreVisitReason(value.key.nonproductiveVisitReasonId).subscribe(
      res => this.toastr.success("Deleted"),
      err => this.toastr.error("Error!!")
    );
  }

}
