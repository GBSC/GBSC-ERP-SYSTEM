import { Component, OnInit } from '@angular/core';
import { InventorysystemService, HrmsService, AuthService } from '../../../core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-internal-requisition-request',
  templateUrl: './internal-requisition-request.component.html',
  styleUrls: ['./internal-requisition-request.component.css']
})
export class InternalRequisitionRequestComponent implements OnInit {

  public InventoryItems : any;
	public Departments : any;
	public Branches : any;
  public RequisitionRequestForm : FormGroup;
  public OrderQuantity : number = 0;
  public SalesIndentItems : any[] = [];

  constructor(public InventoryService : InventorysystemService, public HrService : HrmsService, public FormBuilder : FormBuilder, public Auth : AuthService, public toastr : ToastrService) {

    this.RequisitionRequestForm = this.FormBuilder.group({
			IssueDate : [''],
			Remarks : [''],
			Department : [''],
			TotalQuantity : [''],
			Branch:['']
		});

  }

  ngOnInit() {

    // this.InventoryService.GetInventoryItemsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
		// 	this.InventoryItems = res;
		// 	console.log(this.InventoryItems);
		// });

		this.InventoryService.GetInventoryItems().subscribe((res : any) => {
			this.InventoryItems = res;
			// console.log(this.InventoryItems);
		});

		// this.HrService.GetAllDepartmentsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
		// 	this.Departments = res;
		// 	console.log(this.Departments);
		// });

		this.HrService.GetAllDepartments().subscribe((res : any) => {
				this.Departments = res;
				// console.log(this.Departments);
			});

		// this.HrService.GetBranchesByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
		// 	this.Branches = res;
		// 	console.log(this.Branches);
		// });

		this.HrService.GetBranches().subscribe((res : any) => {
				this.Branches = res;
				// console.log(this.Branches);
			});

  }

  addItem(value) {
		this.OrderQuantity += Number.parseInt(value.data.quantity);
  }
  
  removeItem(value) {
		this.OrderQuantity -= Number.parseInt(value.data.quantity);
  }
  
  saveRequest(value) {

		this.SalesIndentItems.filter( a => {
			delete a.packTypeId;
			delete a.packSizeId;
			delete a.__KEY__;
		});
		
		let a : any = {
      IssueDate : value.IssueDate,
      Date : new Date(),
			DepartmentName : value.Department,
			BranchName : value.Branch,
      TotalQuantity : this.OrderQuantity,
      IsInternalOrder : true,
      SalesIndentItems : this.SalesIndentItems,
			CompanyId : this.Auth.getUserCompanyId(),
			UserId : this.Auth.getUserId()
		};

		// console.log(a);

		this.InventoryService.AddSalesIndent(a).subscribe(
			res => {
        this.toastr.success("Request Added");
				this.RequisitionRequestForm.reset();
				this.OrderQuantity = 0;
        this.SalesIndentItems = [];
      },
			err => this.toastr.error("Error. Try again")
		);

	}

}
