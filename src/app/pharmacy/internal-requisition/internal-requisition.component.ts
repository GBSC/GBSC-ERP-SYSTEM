import { Component, OnInit } from '@angular/core';
import { InventorysystemService, HrmsService, AuthGuardService } from '../../core';
import { InventoryItem } from '../../core/Models/Pharmacy/InventoryItem';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-internal-requisition',
	templateUrl: './internal-requisition.component.html',
	styleUrls: ['./internal-requisition.component.scss']
})
export class InternalRequisitionComponent implements OnInit {

	public InventoryItems : any;
	public SalesOrder : any;
	public SalesIndentItems : any[] = [];
	public Departments : any[] = [];
	public RequisitionForm : FormGroup;

	constructor(public InventoryService : InventorysystemService, public HrService : HrmsService, public FormBuilder : FormBuilder, public Auth : AuthGuardService) {
		this.RequisitionForm = this.FormBuilder.group({

		})
	}

	ngOnInit() {
		this.InventoryService.GetInventoryItems().subscribe((res : any) => {
			this.InventoryItems = res;
		});

		this.HrService.GetAllDepartments().subscribe((res : any) => {
			this.Departments = res;
		});
	}

	saveOrder(value) {
		
	}

}
