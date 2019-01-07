import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-internal-requisition-view',
  templateUrl: './internal-requisition-view.component.html',
  styleUrls: ['./internal-requisition-view.component.css']
})
export class InternalRequisitionViewComponent implements OnInit {

  public UnprocessedRequests : any[] = [];
  public ProcessedRequests : any[] = [];

  constructor(public InvService : InventorysystemService, public Toastr : ToastrService, public Auth : AuthService) { }

  ngOnInit() {
    
    this.InvService.GetUnprocessedInternalRequisitionRequestsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) => {
      this.UnprocessedRequests = res;
      console.log(this.UnprocessedRequests);
    });

    this.InvService.GetCurrentMonthProcessedInternalRequisitionRequestsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) => {
      this.ProcessedRequests = res;
      console.log(this.ProcessedRequests);
    });
  }

  processRequest(value) {
    console.log(value);
  }

  deleteRequest(value) {
    console.log(value);
  }

  updateRequest(value) {
    console.log(value);
  }

}
