import { Component, OnInit } from '@angular/core';
import { PatientService, PharmacyService } from '../../../core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from '../../../core/Models/HIMS/appointment';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientInvoice } from '../../../core/Models/HIMS/patientinvoice';
import { PatientInvoiceItem } from '../../../core/Models/HIMS/patientinvoiceitem';
import { Test } from '../../../core/Models/HIMS/Test';
import { Package } from '../../../core/Models/HIMS/packages';
import { InventoryItem } from '../../../core/Models/Pharmacy/InventoryItem';
import { PatientPackage } from '../../../core/Models/HIMS/PatientPackage';
import { Consultant } from '../../../core/Models/HIMS/consultant';

@Component({
  	selector: 'app-appointmentpaymentreceipt',
  	templateUrl: './appointmentpaymentreceipt.component.html',
  	styleUrls: ['./appointmentpaymentreceipt.component.scss']
})
export class AppointmentpaymentreceiptComponent implements OnInit {
	private Consultants : Consultant[] = [];
	private Tests : Test[] = [];
	private Packages : Package[] = [];
	private InventoryItems : InventoryItem[] = [];

	private SelectedAppointment : any;
	private InvoiceForm : FormGroup;

	private PatientInvoice : PatientInvoice;
	private PatientInvoiceItem : any[] = [];
	private PatientInvoiceItemsArrayForPost : PatientInvoiceItem[] = [];

	private SelectedPatientPackage : any = {};

	private ChequeBank : boolean = true;
	private ChequeNumber : boolean = true;
	private CreditCardCharges : boolean = true;
	private PackagePayment : boolean = true;

	private SelectedInvoiceItemUnitPrice : number;
	private SelectedInvoiceItemNameId : number;
	private SelectedInvoiceItemName : string;

	private Index : number = 0;

	private AppointmentDate : Date;
	private NewBalance : number = 0;
	private InvoiceItemNature : any[] = [
		{id : 1, Name : "Consultation"},
		{id : 2, Name : "Lab Test"},
		{id : 3, Name : "Medicine"},
		{id : 4, Name : "Package"},
		{id : 5, Name : "Other"}
	];

	constructor(private PatientService : PatientService, private PharmacyService : PharmacyService, private ActivatedRoute : ActivatedRoute, private FormBuilder : FormBuilder) {
		this.InvoiceForm = this.FormBuilder.group({
			MRN : [''],
			Date : [],
			VisitNature : [''],
			SlipNumber : [''],
			PatientName : [''],
			Consultant : [''],
			SpouseName : [''],
			Package : [''],
			TotalPrice : [''],
			TotalAmountPaid : [''],
			TotalBalance : [''],
			PaidAmount : [''],
			NewBalance : [this.NewBalance],
			Remarks : [''],
			PaymentMethod : [''],
			// ChequeNumber : [''],
			ChequeNumber : [{value: 0, disabled: this.ChequeNumber}],
			// Bank : [''],
			Bank : [{value: 0, disabled: this.ChequeBank}],
			Total : [''],
			CreditCardChargesPercentage : [{value: 0, disabled: this.CreditCardCharges}],
			// CreditCardChargesPercentage : [''],
			GrossAmount : [''],
			NetAmount : [''],
		});
	}

	ngOnInit() {

		this.PatientService.GetTests().subscribe((res : Test[]) => {
			this.Tests = res;
			// console.log(this.Tests);
		});

		this.PatientService.GetPackages().subscribe((res : Package[]) => {
			this.Packages = res;
			// console.log(this.Packages);
		});

		this.PharmacyService.GetInventoryItemsArray().subscribe((res : InventoryItem[]) => {
			this.InventoryItems = res;
			// console.log(this.InventoryItems);
		});

		this.PatientService.GetConsultants().subscribe((res : Consultant[]) => {
			this.Consultants = res;
			// console.log(this.Consultants);
		})

		this.ActivatedRoute.params.subscribe(params => {
            if(params['id']) {
                this.PatientService.GetAppointmentDetails(params['id']).subscribe((res : Appointment) => {
					this.SelectedAppointment = res;
					// console.log(this.SelectedAppointment);
					
					let partner : string = '';
					if(this.SelectedAppointment.patient.partner === null)
						partner = '';
					else
						partner = this.SelectedAppointment.patient.partner.firstName;
					
					this.AppointmentDate = new Date(this.SelectedAppointment.appointmentDate);

					let packagename : string = '';

					if(this.SelectedAppointment.patient.patientPackage) {
						this.SelectedPatientPackage = this.Packages.find(a => a.packageId === this.SelectedAppointment.patient.patientPackage.packageId);
						packagename = this.SelectedPatientPackage.packageName;
					}
					else {
						packagename = '';
					}

					if(this.SelectedPatientPackage != null) {
						this.PackagePayment = true;
					}

					let patientpackage : any = {
						totalPrice : 0,
						totalAmountPaid : 0,
						totalBalance : 0,
					};

					if(this.SelectedAppointment.patient.patientPackage) {
						patientpackage = this.SelectedAppointment.patient.patientPackage;
					}

					this.InvoiceForm.patchValue({
						MRN : this.SelectedAppointment.patient.mrn || '',
						VisitNature : this.SelectedAppointment.visitNature.nature || '',
						SlipNumber : this.SelectedAppointment.patientInvoice.slipNumber || '',
						PatientName : this.SelectedAppointment.patient.firstName || '',
						Consultant : this.SelectedAppointment.consultant.name || '',
						SpouseName : partner,
						Package : packagename,
						TotalPrice : patientpackage.totalPrice,
						TotalAmountPaid : patientpackage.totalAmountPaid,
						TotalBalance : patientpackage.totalBalance,
						Remarks : this.SelectedAppointment.patientInvoice.invoiceRemarks || ''
					});
				});
            }
		});
	}

	onChange(value) {
		// console.log(value);
		if(value === "Cheque") {
			this.ChequeBank = false;
			this.ChequeNumber = false;
		}
		else if(value === "CreditCard") {
			this.CreditCardCharges = false;
		}
		else {
			this.ChequeBank = true;
			this.ChequeNumber = true;
			this.CreditCardCharges = true;
		}
	}

	CalculateNewBalance(CurrentPayment, TotalBalance) {
		this.NewBalance = TotalBalance - CurrentPayment;
	}

	setNature(rowData: any, value: any): void {
		// console.log("Nature");
        rowData.id = null;
        (<any>this).defaultSetCellValue(rowData, value);
	}

	setConsultant(rowData: any, value: any): void {
		// console.log("Consultant");
        rowData.consultantId = null;
        (<any>this).defaultSetCellValue(rowData, value);
	}

	setTest(rowData: any, value: any): void {
		// console.log("Test");
        rowData.testId = null;
        (<any>this).defaultSetCellValue(rowData, value);
	}

	setPackage(rowData: any, value: any): void {
		// console.log("Package");
        rowData.packageId = null;
        (<any>this).defaultSetCellValue(rowData, value);
	}

	setMedicine(rowData: any, value: any): void {
		// console.log("Medicine");
		rowData.inventoryItemId = null;
        (<any>this).defaultSetCellValue(rowData, value);
	}
	
	onEditorPreparing(e) {
		// console.log(e);
		
        if (e.parentType === "dataRow" && e.dataField === "id" && e.value === "Consultation") {
			// e.editorOptions.disabled = (typeof e.row.data.testId !== "number");
			// e.editorOptions.disabled = (typeof e.row.data.packageId !== "number");
			// e.editorOptions.disabled = (typeof e.row.data.inventoryItemId !== "number");
			return;
        }
        else if (e.parentType === "dataRow" && e.dataField === "id" && e.value === "Lab Test") {
			// e.editorOptions.disabled = (typeof e.row.data.consultantId !== "number");
			// e.editorOptions.disabled = (typeof e.row.data.packageId !== "number");
			// e.editorOptions.disabled = (typeof e.row.data.inventoryItemId !== "number");
			return;
		}
		else if (e.parentType === "dataRow" && e.dataField === "id" && e.value === "Medicine") {
			// e.editorOptions.disabled = (typeof e.row.data.testId !== "number");
			// e.editorOptions.disabled = (typeof e.row.data.packageId !== "number");
			// e.editorOptions.disabled = (typeof e.row.data.consultantId !== "number");
			return;
		}
		else if (e.parentType === "dataRow" && e.dataField === "id" && e.value === "Package") {
			// e.editorOptions.disabled = (typeof e.row.data.testId !== "number");
			// e.editorOptions.disabled = (typeof e.row.data.inventoryItemId !== "number");
			// e.editorOptions.disabled = (typeof e.row.data.consultantId !== "number");
			return;
		}
		else if (e.parentType === "dataRow" && e.dataField === "id" && e.value === "Other") {
			// e.editorOptions.disabled = (typeof e.row.data.consultantId !== "number");
			// e.editorOptions.disabled = (typeof e.row.data.testId !== "number");
			// e.editorOptions.disabled = (typeof e.row.data.packageId !== "number");
			// e.editorOptions.disabled = (typeof e.row.data.inventoryItemId !== "number");
			return;
		}
		else {
		// 	e.editorOptions.disabled = (typeof e.row.data.consultantId !== "number");
		// 	e.editorOptions.disabled = (typeof e.row.data.testId !== "number");
		// 	e.editorOptions.disabled = (typeof e.row.data.packageId !== "number");
		// 	e.editorOptions.disabled = (typeof e.row.data.inventoryItemId !== "number");
			return;
        }
	}
	
	AddInvoiceDetail(value) {

		if(value.data.id) {

			switch (value.data.id) {

				case 'Lab Test': 
					this.SelectedInvoiceItemNameId = value.data.testId;
					let a : Test = this.Tests.find(a => a.testId === this.SelectedInvoiceItemNameId);
					// console.log(a);
					this.SelectedInvoiceItemUnitPrice = a.charges || 0;
					this.SelectedInvoiceItemName = a.testName || '';
					break;

				case 'Consultation':
					this.SelectedInvoiceItemNameId = value.data.consultantId;
					let b : Consultant = this.Consultants.find(a => a.consultantId === this.SelectedInvoiceItemNameId);
					// console.log(b);
					this.SelectedInvoiceItemUnitPrice = b.charges || 0;
					this.SelectedInvoiceItemName = b.name || '';
					break;

				case 'Medicine':
					this.SelectedInvoiceItemNameId = value.data.inventoryItemId;
					let c : InventoryItem = this.InventoryItems.find(a => a.inventoryItemId === this.SelectedInvoiceItemNameId);
					// console.log(c);
					this.SelectedInvoiceItemUnitPrice = Number.parseFloat(c.retailPrice) || 0;
					this.SelectedInvoiceItemName = c.name || '';
					break;

				case 'Package':
					this.SelectedInvoiceItemNameId = value.data.packageId;
					let d : Package = this.Packages.find(a => a.packageId === value.data.packageId);
					// console.log(d);
					this.SelectedInvoiceItemUnitPrice = d.charges || 0;
					this.SelectedInvoiceItemName = d.packageName || '';
					break;
					
				case 'Other':
					this.SelectedInvoiceItemNameId = null;
					this.SelectedInvoiceItemUnitPrice = 1;
					this.SelectedInvoiceItemName = "Other";
					break;

			}

			let a : any = {
				Nature : value.data.id,
				Description : value.data.description,
				UnitPrice : this.SelectedInvoiceItemUnitPrice,
				NameId : this.SelectedInvoiceItemNameId,
				Name : this.SelectedInvoiceItemName,
				Quantity : value.data.quantity,
				GrossAmount : this.SelectedInvoiceItemUnitPrice * Number.parseFloat(value.data.quantity),
				DiscountPercentage : value.data.discountPercentage,
				DiscountAmount : Number.parseFloat(value.data.grossAmount) * Number.parseFloat(value.data.discountPercentage) / 100,
				NetAmount : (this.SelectedInvoiceItemUnitPrice * Number.parseFloat(value.data.quantity)) - (Number.parseFloat(value.data.grossAmount) * Number.parseFloat(value.data.discountPercentage) / 100),
				IsPaid : value.data.isPaid
			};

			value.data.unitPrice = this.SelectedInvoiceItemUnitPrice;
			value.data.grossAmount = this.SelectedInvoiceItemUnitPrice * Number.parseFloat(value.data.quantity);
			value.data.discountAmount = Number.parseFloat(value.data.grossAmount) * Number.parseFloat(value.data.discountPercentage) / 100;
			value.data.netAmount = (this.SelectedInvoiceItemUnitPrice * Number.parseFloat(value.data.quantity)) - (Number.parseFloat(value.data.grossAmount) * Number.parseFloat(value.data.discountPercentage) / 100);

			// console.log(a);
			this.PatientInvoiceItem.push(value.data);
			this.PatientInvoiceItem.splice(this.Index, 1);
			this.Index += 1;
			this.PatientInvoiceItemsArrayForPost.push(a);
			// console.log(this.PatientInvoiceItem);
			// console.log(this.PatientInvoiceItemsArrayForPost);
		}
	}

	SubmitPatientInvoice(value) {
		console.log(value);
		
	}
}