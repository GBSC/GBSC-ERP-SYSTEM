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
import { ToastrService } from 'ngx-toastr';

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

	private SelectedInvoiceItemUnitPrice : number;
	private SelectedInvoiceItemNameId : number;
	private SelectedInvoiceItemName : string;

	private TotalGrossAmount : number = 0;
	private TotalDiscountAmount : number = 0;
	private TotalNetAmount : number = 0;

	private Index : number = 0;

	private PatientPackage : PatientPackage;
	private ContainsPackage : boolean = false;
	private PatientIdForPackage : number = null;
	private PatientPackageInvoiceItemIndexNumber : number = 0;

	private AppointmentDate : Date;
	private NewBalance : number = 0;
	
	private InvoiceItemNatureWithoutPackage : any[] = [
		{id : 1, Name : "Consultation"},
		{id : 2, Name : "Lab Test"},
		{id : 3, Name : "Medicine"},
		{id : 5, Name : "Other"}
	];
	
	private InvoiceItemNature : any[] = [
		{id : 1, Name : "Consultation"},
		{id : 2, Name : "Lab Test"},
		{id : 3, Name : "Medicine"},
		{id : 4, Name : "Package"},
		{id : 5, Name : "Other"}
	];

	private InvoiceItemNatureDataSource : any[] = this.InvoiceItemNature;

	constructor(private PatientService : PatientService,  private Toastr : ToastrService, private PharmacyService : PharmacyService, private ActivatedRoute : ActivatedRoute, private FormBuilder : FormBuilder) {
		this.InvoiceForm = this.FormBuilder.group({
			MRN : [''],
			Date : [new Date()],
			VisitNature : [''],
			SlipNumber : [''],
			PatientName : [''],
			Consultant : [''],
			SpouseName : [''],
			Package : [''],
			TotalPrice : [0],
			TotalAmountPaid : [0],
			TotalBalance : [0],
			CurrentPayment : [0],
			NewBalance : [this.NewBalance],
			Remarks : [''],
			PaymentMethod : [''],
			ChequeNumber : [''],
			Bank : [''],
			CreditCardChargesPercentage : [0],
			GrossAmount : [0],
			DiscountAmount : [0],
			NetAmount : [0],
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
		});

		this.ActivatedRoute.params.subscribe(params => {
            if(params['id']) {
				// console.log("ID");
				this.InvoiceForm.get('MRN').disable();
				this.InvoiceForm.get('Date').disable();
				this.InvoiceForm.get('VisitNature').disable();
				this.InvoiceForm.get('SlipNumber').disable();
				this.InvoiceForm.get('PatientName').disable();

                this.PatientService.GetAppointmentDetails(params['id']).subscribe((res : Appointment) => {
					this.SelectedAppointment = res;
					// console.log(this.SelectedAppointment);
					
					this.PatientIdForPackage = this.SelectedAppointment.patientId;

					let partner : string = '';
					if(this.SelectedAppointment.patient.partner === null)
						partner = '';
					else
						partner = this.SelectedAppointment.patient.partner.firstName || '';
					
					this.AppointmentDate = new Date(this.SelectedAppointment.appointmentDate);

					let packagename : string = '';

					if(this.SelectedAppointment.patient.patientPackage) {
						this.InvoiceForm.get('CurrentPayment').enable();
						this.SelectedPatientPackage = this.Packages.find(a => a.packageId === this.SelectedAppointment.patient.patientPackage.packageId);
						packagename = this.SelectedPatientPackage.packageName || '';
					}
					else {
						packagename = '';
					}

					// if(this.SelectedAppointment.patientInvoice != null) {
					// 	this.InvoiceForm.get('CurrentPayment').enable();
					// }

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
						PatientName : this.SelectedAppointment.patient.firstName || '',
						Consultant : this.SelectedAppointment.consultant.name || '',
						SpouseName : partner,
						Package : packagename,
						TotalPrice : patientpackage.totalPrice,
						TotalAmountPaid : patientpackage.totalAmountPaid,
						TotalBalance : patientpackage.totalBalance,
					});
				});
			}
			else {
				// console.log("No ID");
				this.InvoiceForm.get('MRN').enable();
				this.InvoiceForm.get('Date').enable();
				this.InvoiceForm.get('VisitNature').enable();
				this.InvoiceForm.get('SlipNumber').enable();
				this.InvoiceForm.get('PatientName').enable();
			}
		});
	}

	onChange(value) {
		// console.log(value);
		if(value === "Cheque") {
			this.InvoiceForm.get('Bank').enable();
			this.InvoiceForm.get('ChequeNumber').enable();
			this.InvoiceForm.get('CreditCardChargesPercentage').disable();
		}
		else if(value === "CreditCard") {
			this.InvoiceForm.get('CreditCardChargesPercentage').enable();
		}
		else {
			this.InvoiceForm.get('Bank').disable();
			this.InvoiceForm.get('ChequeNumber').disable();
			this.InvoiceForm.get('CreditCardChargesPercentage').disable();
		}
	}

	CalculateNewBalance(event, CurrentPayment, TotalBalance) {
		// console.log(event);
		this.NewBalance = Number.parseFloat(TotalBalance) - Number.parseFloat(CurrentPayment);
		if(event.key === "Enter")
		{
			// console.log(event.code === "Enter");
			this.TotalGrossAmount += Number.parseFloat(CurrentPayment);
			this.TotalNetAmount += Number.parseFloat(CurrentPayment);
			this.InvoiceForm.get('CurrentPayment').disable();
            this.Toastr.success("Package Payment Added");
		}
		else
			this.Toastr.info("Press Enter to add Payment Package");
	}

	CalculateNetAmount(event, CreditCardChargesPercentage) {
		if(event.key === "Enter")
		{
			let a : number = this.TotalNetAmount;
			this.TotalNetAmount += this.TotalNetAmount * (Number.parseFloat(CreditCardChargesPercentage) / 100);
			this.InvoiceForm.get('CreditCardChargesPercentage').disable();
			this.InvoiceForm.get('PaymentMethod').disable();
            this.Toastr.success(a * (Number.parseFloat(CreditCardChargesPercentage) / 100) + "PKR Credit Card Charges Added to Invoice");
		}
		else
			this.Toastr.info("Press Enter to add Credit Card Charges");
	}

	EnableBank(event) {
		if(event.key)
		{
			this.InvoiceForm.get('Bank').enable();
			this.InvoiceForm.get('CreditCardChargesPercentage').disable();
		}
	}

	DisablePaymentMethod(event) {
		if(event.key === "Enter")
		{
			this.InvoiceForm.get('Bank').disable();
			this.InvoiceForm.get('ChequeNumber').disable();
			this.InvoiceForm.get('PaymentMethod').disable();
            this.Toastr.success("Payment Details Added to Invoice");
		}
		else
			this.Toastr.info("Press Enter to add Payment Details");
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

					this.ContainsPackage = true;

					let patientpackage : any = {
						PackageId : d.packageId,
						PatientId : this.PatientIdForPackage,
						TotalPrice : d.charges || 0
					};

					this.PatientPackageInvoiceItemIndexNumber = this.Index;
					this.PatientPackage = patientpackage;
					this.InvoiceItemNatureDataSource = this.InvoiceItemNatureWithoutPackage;

					this.InvoiceForm.patchValue({
						Package : d.packageName || '',
						TotalPrice : <number>d.charges || 0,
						TotalAmountPaid : 0,
						TotalBalance : <number>d.charges || 0
					});

					
					this.InvoiceForm.get('CurrentPayment').enable();

					break;
					
				case 'Other':
					this.SelectedInvoiceItemNameId = null;
					this.SelectedInvoiceItemUnitPrice = 1;
					this.SelectedInvoiceItemName = "Other";
					break;

			}

			let a : any = {
				Nature : <string>(value.data.id),
				Description : <string>(value.data.description),
				UnitPrice : this.SelectedInvoiceItemUnitPrice,
				NameId : this.SelectedInvoiceItemNameId,
				Name : this.SelectedInvoiceItemName,
				Quantity : <Number>(value.data.quantity),
				GrossAmount : <Number>(this.SelectedInvoiceItemUnitPrice * Number.parseFloat(value.data.quantity)),
				DiscountPercentage : <Number>(value.data.discountPercentage),
				DiscountAmount : (this.SelectedInvoiceItemUnitPrice * Number.parseFloat(value.data.quantity)) * Number.parseFloat(value.data.discountPercentage) / 100,
				NetAmount : (this.SelectedInvoiceItemUnitPrice * Number.parseFloat(value.data.quantity)) - ((this.SelectedInvoiceItemUnitPrice * Number.parseFloat(value.data.quantity)) * Number.parseFloat(value.data.discountPercentage) / 100),
				IsPaid : <boolean>(value.data.isPaid) || false
			};

			// value.data.nameId = this.SelectedInvoiceItemNameId;
			value.data.__KEY__ = this.Index;
			value.data.nature = value.data.id;
			value.data.name = this.SelectedInvoiceItemName;
			value.data.unitPrice = this.SelectedInvoiceItemUnitPrice;
			value.data.grossAmount = this.SelectedInvoiceItemUnitPrice * Number.parseFloat(value.data.quantity);
			value.data.discountAmount = Number.parseFloat(value.data.grossAmount) * Number.parseFloat(value.data.discountPercentage) / 100;
			value.data.netAmount = (this.SelectedInvoiceItemUnitPrice * Number.parseFloat(value.data.quantity)) - (Number.parseFloat(value.data.grossAmount) * Number.parseFloat(value.data.discountPercentage) / 100);

			// console.log(value.data);

			this.PatientInvoiceItem.push(value.data);
			this.PatientInvoiceItem.splice(this.Index, 1);
			
			if(value.data.isPaid === true && value.data.id != "Package") {
				this.TotalGrossAmount += Number.parseFloat(value.data.grossAmount);
				this.TotalDiscountAmount += Number.parseFloat(value.data.discountAmount);
				this.TotalNetAmount += Number.parseFloat(value.data.netAmount);
			}

			// console.log(this.TotalGrossAmount, this.TotalDiscountAmount, this.TotalNetAmount);

			this.PatientInvoiceItemsArrayForPost[this.Index] = a;
			this.Index += 1;
			// console.log(this.PatientInvoiceItem);
			// console.log(this.PatientInvoiceItemsArrayForPost);
		}
	}

	DeleteInvoiceDetail(value) {
		// console.log(value);
		if(value.data.isPaid === "true") {
			this.TotalGrossAmount -= Number.parseFloat(value.data.grossAmount);
			this.TotalDiscountAmount -= Number.parseFloat(value.data.discountAmount);
			this.TotalNetAmount -= Number.parseFloat(value.data.netAmount);
		}

		this.PatientInvoiceItemsArrayForPost.splice(value.data.__KEY__ , 1);
		// console.log(this.PatientInvoiceItemsArrayForPost);

		if(this.ContainsPackage === true && value.data.__KEY__ === this.PatientPackageInvoiceItemIndexNumber) {
			this.ContainsPackage = false;
			this.PatientPackage = null;
			this.InvoiceItemNatureDataSource = this.InvoiceItemNature;

			this.InvoiceForm.patchValue({
				Package : '',
				TotalPrice : 0,
				TotalAmountPaid : 0,
				TotalBalance : 0
			});

			this.InvoiceForm.get('CurrentPayment').disable();
		}
	}

	SubmitPatientInvoice(value) {
		console.log(value);

		let a : any = {
			// SlipNumber : <number>value.SlipNumber,
			DateCreated : new Date(value.Date) || this.AppointmentDate || new Date(),
			InvoiceType : "Patient Invoice",
			TotalPrice : Number.parseFloat(value.TotalPrice) || 0,
			TotalAmountPaid : (Number.parseFloat(value.TotalAmountPaid) || 0) + (Number.parseFloat(value.CurrentPayment) || 0),
			TotalBalance : Number.parseFloat(value.NewBalance) || 0,
			LastPaidAmount : Number.parseFloat(value.CurrentPayment) || 0,
			InvoiceRemarks : <string>value.Remarks || '',
			Consultant : <string>value.Consultant || '',
			PaymentMethod : <string>value.PaymentMethod || '',
			ChequeNumber : <string>value.ChequeNumber || '',
			Bank : <string>value.Bank || '',
			CreditCardChargesPercentage : Number.parseFloat(value.CreditCardChargesPercentage) || 0,
			CreditCardChargesAmount : <number>((Number.parseFloat(value.CreditCardChargesPercentage) / 100) * this.TotalNetAmount) || 0,
			TotalGrossAmount : this.TotalGrossAmount,
			TotalDiscountAmount : this.TotalDiscountAmount,
			TotalNetAmount : this.TotalNetAmount,
			PatientId : this.SelectedAppointment.patientId,
			AppointmentId : this.SelectedAppointment.appointmentId,
			PatientInvoiceItems : this.PatientInvoiceItemsArrayForPost
		}

		this.PatientInvoice = a;
		console.log("Patient Invoice ", this.PatientInvoice);
		
		// this.PatientService.AddPatientInvoice(this.PatientInvoice).subscribe((res : any) => {
		// 	console.log(res);
		// 	this.Toastr.success("Patient Invoice Added");
		// });

		if(this.ContainsPackage === true) {
			this.PatientPackage.LastPaidAmount = this.PatientInvoice.LastPaidAmount;
			this.PatientPackage.LastPaymentDate = this.PatientInvoice.DateCreated;
			this.PatientPackage.TotalAmountPaid = this.PatientInvoice.TotalAmountPaid;
			this.PatientPackage.TotalBalance = this.PatientInvoice.TotalBalance;
			console.log("Patient Package ", this.PatientPackage);
			
			// this.PatientService.AddPatientPackage(this.PatientPackage).subscribe((res : any) => {
			// 	console.log(res);
			// 	this.Toastr.success("Patient Package Added");
			// });
		}

		this.PatientService.GetAppointmentById(this.SelectedAppointment.appointmentId).subscribe((res : Appointment) => {
			console.log(res);
			res.IsPaid = true;
			this.PatientService.UpdateAppointment(res).subscribe((res : any) => {
				console.log(res);
			});
		});
	}
}