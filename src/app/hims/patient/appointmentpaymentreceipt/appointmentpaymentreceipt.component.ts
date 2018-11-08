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

@Component({
  	selector: 'app-appointmentpaymentreceipt',
  	templateUrl: './appointmentpaymentreceipt.component.html',
  	styleUrls: ['./appointmentpaymentreceipt.component.scss']
})
export class AppointmentpaymentreceiptComponent implements OnInit {
	private Tests : Test[] = [];
	private Packages : Package[] = [];
	private InventoryItems : InventoryItem[] = [];

	private SelectedAppointment : any;
	private InvoiceForm : FormGroup;
	private Invoice : PatientInvoice;
	private InvoiceDetails : PatientInvoiceItem[] = [];

	private SelectedPatientPackage : any = {};

	private ChequeBank : boolean = true;
	private ChequeNumber : boolean = true;
	private CreditCardCharges : boolean = true;
	private PackagePayment : boolean = true;

	private AppointmentDate : Date;

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
			NewBalance : [''],
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

		this.ActivatedRoute.params.subscribe(params => {

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

            if(params['id']) {
                this.PatientService.GetAppointmentDetails(params['id']).subscribe((res : Appointment) => {
					this.SelectedAppointment = res;
					console.log(this.SelectedAppointment);
					
					let partner : string = '';
					if(this.SelectedAppointment.patient.partner === null)
						partner = '';
					else
						partner = this.SelectedAppointment.patient.partner.firstName;

					this.Invoice = this.SelectedAppointment.patientInvoice;
					this.InvoiceDetails = this.SelectedAppointment.patientInvoice.patientInvoiceItems;

					this.AppointmentDate = new Date(this.SelectedAppointment.appointmentDate);

					let packagename : string = '';
					if(this.SelectedAppointment.patient.patientPackage) {
						this.SelectedPatientPackage = this.Packages.find(a => a.PackageId === this.SelectedAppointment.patient.patientPackage.packageId);
						packagename = this.SelectedAppointment.packageName;
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
						// lastPaidAmount : 0
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
						// PaidAmount : patientpackage.lastPaidAmount,
						Remarks : this.SelectedAppointment.patientInvoice.invoiceRemarks || ''
					});
                });
            }
		});
		
		return;
	}

	onChange(value) {
		console.log(value);
		if(value === "Cheque") {
			this.ChequeBank = false;
			this.ChequeNumber = false;
			return;
		}
		else if(value === "CreditCard") {
			this.CreditCardCharges = false;
			return;
		}
		else {
			this.ChequeBank = true;
			this.ChequeNumber = true;
			this.CreditCardCharges = true;
			return;
		}
	}
}