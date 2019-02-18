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

	public InventoryItems: any;
	// public PackSizes : any;
	// public PackTypes : any;
	public SalesOrder: any;
	public SalesOrderItems: any[] = [];
	// public Departments : any[] = [];
	// public Branches : any[] = [];
	public RequisitionForm: FormGroup;
	// public setPackType : any;
	// public setPackSize : any;
	public Inventories: any;
	public UpdatedInventories: any[] = [];

	public RequestDate : Date;
	public TotalOrderQuantity: number = 0;

	public id: number = null;
	public SelectedIndentId : number = null;

	public SelectedRequest: any;

	constructor(public InventoryService: InventorysystemService, public HrService: HrmsService, public FormBuilder: FormBuilder, public Auth: AuthService, public toastr: ToastrService, private Rerouted: ActivatedRoute) {
		this.RequisitionForm = this.FormBuilder.group({
			IndentNumber: [''],
			IssueDate: [''],
			RequestDate: Date,
			Remarks: [''],
			Department: [''],
			Branch: [''],
			TotalRequestQuantity: [''],
			TotalOrderQuantity : ['']
		});
	}

	ngOnInit() {
		// console.log(this.Auth.getUserCompanyId());
		this.InventoryService.GetInventoryItems().subscribe((res: any) => {
			this.InventoryItems = res;
			// console.log(this.InventoryItems);

		// this.InventoryService.GetInventoryItemsByCompany(this.Auth.getUserCompanyId()).subscribe((res: any) => {
		// 	this.InventoryItems = res;
		// 	console.log(this.InventoryItems);


			// this.InventoryService.GetPackSizesByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
			// 	this.PackSizes = res;
			// 	// console.log(this.PackSizes);
			// });

			// this.InventoryService.GetPackTypesByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
			// 	this.PackTypes = res;
			// 	// console.log(this.PackTypes);
			// });

			// this.HrService.GetAllDepartmentsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
			// 	this.Departments = res;
			// 	console.log(this.Departments);
			// });

			// this.InventoryService.GetInventoriesByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
			// 	this.Inventories = res;
			// 	console.log(this.Inventories);
			// });

			this.InventoryService.GetInventories().subscribe((res: any) => {
				this.Inventories = res;
				// console.log(this.Inventories);


				// this.HrService.GetBranchesByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
				// 	this.Branches = res;

				// 	this.HrService.GetAllDepartmentsByCompany(this.Auth.getUserCompanyId()).subscribe((res : any) => {
				// 		this.Departments = res;
				// console.log(this.Departments);

				this.Rerouted.params.subscribe((params) => {
					this.id = +params['id'];

					if (this.id) {
						this.InventoryService.GetSalesIndent(this.id).subscribe((res: any) => {

							if (res.isProcessed != true && res.IsInternalOrder == true) {
								// console.log(res);
								// let a : any = this.Departments.find(d => d.name == res.departmentName);
								// let b : any = this.Branches.find(d => d.name == res.branchName);
								// console.log(a);
								// this.SelectedDistributor = a.distributorId;

								this.RequestDate = new Date(res.issueDate);
								this.SelectedIndentId = Number.parseInt(res.salesIndentId);

								this.RequisitionForm.patchValue({
									IndentNumber : res.salesIndentNumber,
									// RequestDate: res.issueDate,
									TotalRequestQuantity: Number.parseInt(res.totalQuantity) || 0,
									Branch: res.branchName || null,
									Department: res.departmentName || null
								});

								res.salesIndentItems.forEach((item: any) => {
									// console.log(item);

									let c: any = this.Inventories.find(d => d.inventoryItemId == item.inventoryItemId);
									let stockQuantity: number = 0;
									if (c != undefined) {
										stockQuantity = Number.parseInt(c.stockQuantity);
									}

									let a: any = {
										companyId: this.Auth.getUserCompanyId(),
										inventoryItemId: Number.parseInt(item.inventoryItemId),
										stockQuantity: stockQuantity || 0,
										requestQuantity: Number.parseInt(item.quantity),
										orderUnitQuantity: 0,
									};
									// console.log(a);
									this.SalesOrderItems.push(a);
									// console.log(this.SalesOrderItems);
								});

								this.toastr.success("Request details loaded successfully");
							} else {
								this.toastr.error("Request has already been processed");
							}
						});
					}
				});
			});
		});
		// 	});
		// });
	}

	// addItem(value) {
	// 	console.log(value);
	// 	// let aa: any = this.InventoryItems.find(a => a.inventoryItemId == value.data.inventoryItemId);
	// 	// let ba : any = this.PackTypes.find(a => a.packTypeId == aa.packTypeId);
	// 	// let ca : any = this.PackSizes.find(a => a.packSizeId == aa.packSizeId);
	// 	// console.log(aa);
	// 	// value.data.packType = ba.name;
	// 	// value.data.packSize = ca.size;
	// 	// value.data.packTypeId = aa.packTypeId;
	// 	// value.data.packSizeId = aa.packSizeId;
	// 	this.TotalOrderQuantity += Number.parseInt(value.data.quantity);
	// }

	updateItem() {
		this.TotalOrderQuantity = 0;
		this.SalesOrderItems.forEach(element => {
			this.TotalOrderQuantity += element.quantity;
		});
	}

	removeItem(value) {
		this.TotalOrderQuantity -= Number.parseInt(value.data.quantity);
	}

	saveOrder(value) {

		// console.log(value);

		this.SalesOrderItems.filter(a => {
			delete a.packTypeId;
			delete a.packSizeId;
			delete a.__KEY__;
			delete a.requestQuantity;
			delete a.stockQuantity;
		});

		// console.log(this.SalesOrderItems);

		let a: any = {
			IssueDate: new Date(value.IssueDate),
			Remarks: value.Remarks,
			DepartmentName: value.Department,
			BranchName: value.Branch,
			TotalQuantity: this.TotalOrderQuantity,
			SalesOrderItems: this.SalesOrderItems,
			IsInternalOrder: true,
			CompanyId: this.Auth.getUserCompanyId(),
			UserId: this.Auth.getUserId(),
			SalesIndentId : this.SelectedIndentId
		};

		// console.log(a);

		this.SalesOrderItems.forEach(element => {
			let b: any = this.Inventories.find(a => a.inventoryItemId == element.inventoryItemId);
			// console.log(b);
			if (b != undefined) {
				// console.log(b);
				b.stockQuantity -= Number.parseInt(element.quantity);
				// console.log(b);
				this.UpdatedInventories.push(b);
			}
			// console.log(this.UpdatedInventories);
		});

		this.InventoryService.AddSalesOrder(a).subscribe(
			res => {
				this.toastr.success("Request Processed");
				this.RequisitionForm.reset();
				this.SalesOrderItems = [];
				this.TotalOrderQuantity = 0;
				this.InventoryService.UpdateInventories(this.UpdatedInventories).subscribe(
					(res: any) => this.toastr.success("Stock Updated"),
					err => this.toastr.error("Unable to update stock")
				);

				if (this.SelectedIndentId) {
					this.InventoryService.ProcessSalesIndentById(this.SelectedIndentId).subscribe(
						(res: any) => {
							this.toastr.success("Initial request updated");
							this.SelectedIndentId = null;
						},
							err => this.toastr.error("Unable to update initial request")
					);
				}
			},
			err => this.toastr.error("Unable to process request. Try again")
		);

	}

}
