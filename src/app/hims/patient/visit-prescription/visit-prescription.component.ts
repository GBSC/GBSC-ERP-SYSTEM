import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryItem } from '../../../core/Models/Pharmacy/InventoryItem';
import { PharmacyService, PatientService } from '../../../core';
import { SalesIndentItem } from '../../../core/Models/Pharmacy/SalesIndentItem';
import { Patient } from '../../../core/Models/HIMS/patient';
import { ActivatedRoute } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';
import { SalesIndent } from '../../../core/Models/Inventory/Sales/SalesIndent';

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
	private SalesIndentItems : SalesIndentItem[] = [];
	
	private TotalQuantity : number = 0;
	private TotalCostPrice : number = 0;
	private TotoalRetailPrice : number = 0;

	private Index : number = 0;

	constructor(private PharmacyService : PharmacyService, private PatientService : PatientService, private Router: ActivatedRoute) {
	}

	async ngOnInit() {
		this.PharmacyService.GetInventoryItems().subscribe((res : any) => {
			this.InventoryItems = res;
			this.FilteredInventoryItems = this.InventoryItems;
			this.InventoryItemDataSource = this.InventoryItems;
		});
		
		this.Router.params.subscribe(params => {
			this.CurrentPatientID = params['id'];
			this.PatientService.getpatient(this.CurrentPatientID).subscribe((Patient : Patient) => {
				this.CurrentPatient = Patient;
			});
		});
	}

	onEditorPreparing(e) {
		this.InventoryItemDataSource = this.FilteredInventoryItems;
	}

	addDays(date : Date, days : string) : Date {
		console.log("Before : ", date);
		date.setDate( date.getDate() + Number.parseInt(days) );
		console.log("After : ", date);
		
		return date;
	}

	AddPrescription(value) {
		// console.log(value);
		// value.data.treatmentEnd = this.addDays(<Date>value.data.treatmentStart, value.data.treatmentTimeInDays);
		// console.log(value);
		// console.log(this.Prescriptions);
		
		console.log(value.data.treatmentStart);

		this.SelectedInventoryItem = this.FilteredInventoryItems.find(a => a.inventoryItemId == value.data.inventoryItemId);
		console.log("SelectedInventoryItem", this.SelectedInventoryItem);

		var a : any = {
			inventoryItemId : <number>value.data.inventoryItemId,
			treatmentStart : value.data.treatmentStart,
			treatmentTimeInDays : <number>value.data.treatmentTimeInDays,
			treatmentEnd : this.addDays(value.data.treatmentStart, value.data.treatmentTimeInDays),
			dosage : <number>value.data.dosage
		};

		console.log(a);
		this.Prescriptions.push(a);
		console.log(this.Prescriptions);
		this.Prescriptions.splice(this.Index, 1);
		console.log(this.Prescriptions);
		// this.SalesIndentItems.push(a);
		this.TotalQuantity += Number.parseInt(value.data.dosage) * Number.parseInt(value.data.treatmentTimeInDays);
		this.TotalCostPrice += this.TotalQuantity * Number.parseFloat(this.SelectedInventoryItem.costPrice);
		this.TotoalRetailPrice += this.TotalQuantity * Number.parseFloat(this.SelectedInventoryItem.retailPrice);
		this.Index += 1;
		
		this.FilteredInventoryItems = this.FilteredInventoryItems.filter(a => a.inventoryItemId != value.data.inventoryItemId);
		this.InventoryItemDataSource = this.InventoryItems;

	}

	DeletePrescription(value) {
		console.log(value);
		let b : any = this.InventoryItems;
		let a : InventoryItem = b.find( c => c.inventoryItemId == value.data.inventoryItemId );
		this.FilteredInventoryItems.push(a);
	}

	setItemValue(rowData: any, value: any): void {
		rowData.inventoryItemId = null;
		(<any>this).defaultSetCellValue(rowData, value);
	}

	onSubmit() {
		var a : any = {
			date : new Date(),
			// totalTradePrice : 
		};

	}

	onReset() {

	}
}
