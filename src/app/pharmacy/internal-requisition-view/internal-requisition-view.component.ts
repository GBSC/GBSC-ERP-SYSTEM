import { Component, OnInit } from '@angular/core';
import { InventorysystemService, AuthService } from '../../core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internal-requisition-view',
  templateUrl: './internal-requisition-view.component.html',
  styleUrls: ['./internal-requisition-view.component.css']
})
export class InternalRequisitionViewComponent implements OnInit {

  public UnprocessedRequests : any[] = [];
  public ProcessedRequests : any[] = [];
  public InventoryItems : any;
  public Inventories : any;

  constructor(public InvService : InventorysystemService, public Toastr : ToastrService, public Auth : AuthService, public router : Router) { }

  ngOnInit() {
    
    this.InvService.GetUnprocessedInternalRequisitionRequestsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) => {
      this.UnprocessedRequests = res;
      console.log(this.UnprocessedRequests);
    });

    this.InvService.GetCurrentMonthProcessedInternalRequisitionRequestsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) => {
      this.ProcessedRequests = res;
      console.log(this.ProcessedRequests);
    });

    this.InvService.GetInventoryItemsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
			this.InventoryItems = res;
			console.log(this.InventoryItems);
    });
    
    // this.InvService.GetInventoriesByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
		// 	this.Inventories = res;
		// 	console.log(this.Inventories);
    // });
    
    this.InvService.GetInventories().subscribe((res : any) => {
			this.Inventories = res;
			console.log(this.Inventories);
		});
  }

  processRequest(value) {
    console.log(value);

    let c : any[] = [];
    let e : any[] = [];
    
    value.data.salesIndentItems.forEach((item : any) => {

			let b : any = {
        InventoryItemId : item.inventoryItemId,
        Quantity : item.quantity
      };
      c.push(b);

      let d : any = this.Inventories.find(f => f.inventoryItemId == item.inventoryItemId);
      if(d) {
        d.stockQuantity -= item.quantity;
        e.push(d);
      }

		});

    let a : any = {
      IssueDate : value.data.IssueDate,
			Remarks : 'Quick Process',
			ContactPerson : value.data.customerName,
			TotalQuantity : value.data.totalQuantity,
			SalesOrderItems : c,
			CompanyId : this.Auth.getUserCompanyId(),
			UserId : this.Auth.getUserId()
    };

    this.InvService.AddSalesOrder(a).subscribe(
      (res : any) => {
        this.Toastr.success("Order generated");

        this.InvService.UpdateInventories(e).subscribe(
					(res : any) => this.Toastr.success("Stock Updated"),
					err => this.Toastr.error("Unable to update stock")
				);

        this.InvService.ProcessSalesIndentById(value.data.salesIndentId).subscribe(
          (res : any) => {
            this.Toastr.success("Request updated");

            this.InvService.GetUnprocessedInternalRequisitionRequestsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) => {
              this.UnprocessedRequests = res;
              console.log(this.UnprocessedRequests);
            });
        
            this.InvService.GetCurrentMonthProcessedInternalRequisitionRequestsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) => {
              this.ProcessedRequests = res;
              console.log(this.ProcessedRequests);
            });

            // this.InvService.GetInventoriesByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
            // 	this.Inventories = res;
            // 	console.log(this.Inventories);
            // });
            
            this.InvService.GetInventories().subscribe((res : any) => {
              this.Inventories = res;
              console.log(this.Inventories);
            });

          },
          err => this.Toastr.error("Unable to post")
        );
      },
      err => this.Toastr.error("Unable to generate order")
    )
  }

  deleteRequest(value) {
    console.log(value);

    this.InvService.DeleteSalesIndent(value.data.salesIndentId).subscribe(
      (res : any) => {
        this.Toastr.success("Deleted");

        this.InvService.GetUnprocessedInternalRequisitionRequestsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) => {
          this.UnprocessedRequests = res;
          console.log(this.UnprocessedRequests);
        });

        this.InvService.GetCurrentMonthProcessedInternalRequisitionRequestsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any[]) => {
          this.ProcessedRequests = res;
          console.log(this.ProcessedRequests);
        });
      },
      err => this.Toastr.error("Unable to delete")
    );
  }

  updateRequest(value) {
    console.log(value);
    let id : number = Number.parseInt(value.data.salesIndentId);
    this.router.navigate(['pharmacy/requisitionfulfilment/' + id]);
  }

}
