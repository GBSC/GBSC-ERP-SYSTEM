import { InventorysystemService, HrmsService, AuthGuardService, AuthService } from '../../core';
import { InventoryItem } from '../../core/Models/Pharmacy/InventoryItem';
import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-internal-requisition',
	templateUrl: './internal-requisition.component.html',
	styleUrls: ['./internal-requisition.component.scss']
})

export class InternalRequisitionComponent implements OnInit {

	public InventoryItems : any;
	public PackSizes : any;
	public PackTypes : any;
	public SalesOrder : any;
	public SalesOrderItems : any[] = [];
	public Departments : any[] = [];
	public RequisitionForm : FormGroup;
	public OrderQuantity : number = 0;
	public setPackType : any;
	public setPackSize : any;
	public Inventories : any;
	public UpdatedInventories : any;

	public SelectedRequest : any;

	constructor(public InventoryService : InventorysystemService, public HrService : HrmsService, public FormBuilder : FormBuilder, public Auth : AuthService, public toastr : ToastrService, private Rerouted : ActivatedRoute) {
		this.RequisitionForm = this.FormBuilder.group({
			IssueDate : [''],
			Remarks : [''],
			Department : [''],
			TotalQuantity : ['']
		});
	}

	ngOnInit() {
		console.log(this.Auth.getUser());

		if(this.Rerouted.params['id']) {
			this.InventoryService.GetSalesIndent(this.Rerouted.params['id']).subscribe((res : any) => {

				let a = this.Departments.find(a => a.name == res.customerName);

				this.RequisitionForm.patchValue({
					IssueDate : res.issueDate,
					Department : a.departmentId,
					TotalQuantity : res.totalQuantity
				});

				res.salesIndentItems.forEach((item : any) => {
					let a : any = {
						InventoryItemId : item.inventoryItemId,
						Quantity : item.quantity
					};
					this.SalesOrderItems.push(a);
				});
			})
		}

		this.InventoryService.GetInventoryItemsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
			this.InventoryItems = res;
			console.log(this.InventoryItems);
		});

		this.InventoryService.GetPackSizesByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
			this.PackSizes = res;
			console.log(this.PackSizes);
		});

		this.InventoryService.GetPackTypesByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
			this.PackTypes = res;
			console.log(this.PackTypes);
		});

		this.HrService.GetAllDepartmentsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
			this.Departments = res;
			console.log(this.Departments);
		});

		this.InventoryService.GetInventoriesByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
			this.Inventories = res;
			console.log(this.Inventories);
		});
	}

	addItem(value) {
		// console.log(value);
		let aa : any = this.InventoryItems.find(a => a.inventoryItemId == value.data.inventoryItemId);
		// let ba : any = this.PackTypes.find(a => a.packTypeId == aa.packTypeId);
		// let ca : any = this.PackSizes.find(a => a.packSizeId == aa.packSizeId);
		// // console.log(a);
		// value.data.packType = ba.name;
		// value.data.packSize = ca.size;
		value.data.packTypeId = aa.packTypeId;
		value.data.packSizeId = aa.packSizeId;
		this.OrderQuantity += Number.parseInt(value.data.quantity);
	}

	removeItem(value) {
		this.OrderQuantity -= Number.parseInt(value.data.quantity);
	}

	saveOrder(value) {

		console.log(value);

		this.SalesOrderItems.filter( a => {
			delete a.packTypeId;
			delete a.packSizeId;
			delete a.__KEY__;
		});
		
		let a : any = {
			IssueDate : value.IssueDate,
			Remarks : value.Remarks,
			ContactPerson : value.Department,
			TotalQuantity : this.OrderQuantity,
			SalesOrderItems : this.SalesOrderItems,
			CompanyId : this.Auth.getUserCompanyId(),
			UserId : this.Auth.getUserId()
		};

		console.log(a);

		this.SalesOrderItems.forEach(element => {
			let b : any = this.Inventories.find(a => a.inventoryItemId == element.inventoryItemId);
			b.stockQuantity -= element.quantity;
			this.UpdatedInventories.push(b);
		});

		this.InventoryService.AddSalesOrder(a).subscribe(
			res => {
				this.toastr.success("Request Processed");
				this.RequisitionForm.reset();
				this.SalesOrderItems = [];
				this.InventoryService.UpdateInventories(this.UpdatedInventories).subscribe(
					(res : any) => this.toastr.success("Stock Updated"),
					err => this.toastr.error("Unable to update stock")
				);

				if(this.Rerouted.params['id']) {
					this.InventoryService.ProcessSalesIndentById(this.Rerouted.params['id']).subscribe(
						(res : any) => this.toastr.success("Initial request updated"),
						err => this.toastr.error("Unable to update initial request")
					);
				}
			},
			err => this.toastr.error("Unable to process request. Try again")
		);

	}

}
