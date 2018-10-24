import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryItem } from '../../../core/Models/Pharmacy/InventoryItem';
import { PharmacyService, PatientService } from '../../../core';
import { SalesIndentItem } from '../../../core/Models/Pharmacy/SalesIndentItem';
import { Patient } from '../../../core/Models/HIMS/patient';
import { ActivatedRoute } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-visit-prescription',
  templateUrl: './visit-prescription.component.html',
  styleUrls: ['./visit-prescription.component.scss']
})

export class VisitPrescriptionComponent implements OnInit {
	@ViewChild(DxDataGridComponent) gridContainer: DxDataGridComponent
	
	private InventoryItems : InventoryItem;
	private InventoryItemDataSource : InventoryItem;
	private FilteredInventoryItems : any;
	private SelectedInventoryItem : InventoryItem;

	private CurrentPatient : Patient;
	private CurrentPatientID : number;
	
	private Prescriptions : any[] = [];
	private UpdatedModel : SalesIndentItem;

	constructor(private PharmacyService : PharmacyService, private PatientService : PatientService, private Router: ActivatedRoute) {
		// this.setDescriptionValue = this.setDescriptionValue.bind(this);
		// this.setPackTypeValue = this.setPackTypeValue.bind(this);
		// this.setPackSizeValue = this.setPackSizeValue.bind(this);
		// this.setDoasgeValue = this.setDoasgeValue.bind(this);
		// this.getFilteredTerritories = this.getFilteredTerritories.bind(this);
		this.onEditingStart = this.onEditingStart.bind(this);
	}

	async ngOnInit() {
		this.PharmacyService.GetInventoryItems().subscribe((res : any) => {
			this.InventoryItems = res;
			this.FilteredInventoryItems = this.InventoryItems;
			this.InventoryItemDataSource = this.InventoryItems;
			// console.log("InventoryItems", this.InventoryItems);
			// console.log("FilteredInventoryItems", this.FilteredInventoryItems);
			// console.log("InventoryItemDataSource", this.InventoryItemDataSource);
		});
		
		this.Router.params.subscribe(params => {
			this.CurrentPatientID = params['id'];
			this.PatientService.getpatient(this.CurrentPatientID).subscribe((Patient : Patient) => {
				this.CurrentPatient = Patient;
				//console.log("CurrentPatient", this.CurrentPatient);
			});
		});
	}

	onEditingStart(event) {
		console.log(event);
		// console.log("EditingStart");
		// let cached = this.InventoryItemDataSource;
		this.InventoryItemDataSource = this.FilteredInventoryItems;
 
		// if (event.cancel === true){
		// 	console.log("aaaaaa");
			
		// 	this.InventoryItemDataSource = cached;
		// }
	}

	// onCancelEditData(event) {
	// 	console.log(event);
		
	// }

	// onCellPrepared(element : any, info : any) { 
	// 	if (info.column.command === 'edit') 
	// 		element.on('dxclick', '.dx-link', function() { 
	// 			if ($(this).text() === 'Cancel') {

	// 			};
	// 		});
	// }

	AddPrescription(value) {
		this.FilteredInventoryItems = this.FilteredInventoryItems.filter(a => a.inventoryItemId != value.data.inventoryItemId);
		console.log("FilteredInventoryItems", this.FilteredInventoryItems);
		this.InventoryItemDataSource = this.InventoryItems;
		// console.log(value);
		// console.log(this.Prescriptions);
		// this.Prescriptions.push(value.data);
	}

	// UpdateModel(value) {
	// 	console.log(value);
	// 	let b : any = this.InventoryItems;
	// 	let a : InventoryItem = b.find( c => c.inventoryItemId == value.oldData.inventoryItemId );
	// 	this.FilteredInventoryItems.push(a);
	// 	// console.log("FilteredInventoryItems", this.FilteredInventoryItems);
	// 	this.UpdatedModel = { ...value.oldData, ...value.newData };
	// 	this.FilteredInventoryItems = this.FilteredInventoryItems.filter(a => a.inventoryItemId != value.newData.inventoryItemId);
	// 	// console.log("FilteredInventoryItems", this.FilteredInventoryItems);
	// }

	// UpdatePrescription() {
	// 	// console.log(this.Prescriptions);
	// 	this.InventoryItemDataSource = this.InventoryItems;
	// }

	DeletePrescription(value) {
		let b : any = this.InventoryItems;
		let a : InventoryItem = b.find( c => c.inventoryItemId == value.data.inventoryItemId );
		this.FilteredInventoryItems.push(a);
		// console.log("FilteredInventoryItems", this.FilteredInventoryItems);
		// console.log(value);
		// console.log(this.Prescriptions);
	}

	// setDescriptionValue(rowData: any, value: any): void {
	//   console.log("DescriptionValue", value, rowData);
	// }

	// // setTerritoryValue(rowData: any, value: any): void {
	// //   rowData.territoryId = null;
	// //   (<any>this).defaultSetCellValue(rowData, value);
	// // }

	// setPackTypeValue(rowData: any, value: any): void {
	//   console.log("PackTypeValue", value, rowData);
	// }

	// setPackSizeValue(rowData: any, value: any): void {
	//   console.log("PackSizeValue", value, rowData);
	// }

	// setDoasgeValue(rowData: any, value: any): void {
	//   console.log("DoasgeValue", value, rowData);
	// }

	// setItemValue(rowData: any, value: any) : void {
	//   //console.log("ItemValue", value, rowData);
	//   //rowData.areaId = null;
	//   (<any>this).defaultSetCellValue(rowData, value);
	//   console.log("AAAAAAAAA");
	//   // (<any>this).editorOptions.DescriptionValue = "ASDFGHJKL";
	// }

	// setItemValue(event) : void {
	//   //console.log("ItemValue", value, rowData);
	//   //rowData.areaId = null;
	//   //(<any>this).defaultSetCellValue(rowData, value);
	//   console.log("AAAAAAAAA");
	//   // (<any>this).editorOptions.DescriptionValue = "ASDFGHJKL";
	// }

	setItemValue(rowData: any, value: any): void {
		rowData.inventoryItemId = null;
		(<any>this).defaultSetCellValue(rowData, value);
	}

	// onCellPrepared(e) {
	// 	// console.log(e);
	// 	if (e.rowType === 'data' && e.column.command === 'edit') {
	// 		console.log(e);
	// 		//this.gridContainer.instance.refresh();
	// 		// console.log("InventoryItemDataSource", this.InventoryItemDataSource);
	// 		// this.InventoryItemDataSource = this.InventoryItems;
	// 		e.element.oncancel = function() {
	// 			console.log("a");
	// 			this.InventoryItemDataSource = this.InventoryItems;
	// 		};

	// 		// if(e.cellElement == 'click' || e.cellElement == '.dx-link-cancel') {
	// 		// 	console.log("a");
	// 		// 	this.InventoryItemDataSource = this.InventoryItems;
	// 		// }
	// 		// e.cellElement.oncancel('click', '.dx-link-cancel', function() { 
	// 		// 	alert('cancelled');
	// 		// 	this.InventoryItemDataSource = this.InventoryItems;
	// 		//  });
	// 	}
		
	// }

	onEditorPreparing(e) {
		console.log(e);
		if (e.parentType === "dataRow" && e.value && e.dataField === "inventoryItemId") {
			// console.log(e);
			this.SelectedInventoryItem = this.FilteredInventoryItems.find(a => a.inventoryItemId == e.value);
			this.InventoryItemDataSource = this.InventoryItems;
			// console.log("this.SelectedInventoryItem", this.SelectedInventoryItem);
		}
		// if (e.parentType === "dataRow" && e.dataField === "distributorId") {
		//     e.editorOptions.disabled = (typeof e.row.data.territoryId !== "number");
		// }
		// console.log(e);
	}

	// getFilteredTerritories(options) {
	//   return {
	//       store: this.InventoryItems,
	//       filter: options.data ? ["inventoryItemId", "=", options.data.inventoryItemId] : null
	//   };
	// }

	// onEditorPreparing(e) {
	//   if (e.parentType === "dataRow" && e.dataField === "inventoryItemId") {
	//       e.editorOptions.disabled = (typeof e.row.data.inventoryItemId !== "number");
	//   }
	//   console.log("onEditorPreparing", e);
	// }

	// onEditorPrepared (e) {
	//   console.log("onEditorPrepared", e);
	// }

}
