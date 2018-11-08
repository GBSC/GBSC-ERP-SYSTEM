import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from '../../../core/Models/HIMS/appointment';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientInvoice } from '../../../core/Models/HIMS/patientinvoice';
import { PatientInvoiceItem } from '../../../core/Models/HIMS/patientinvoiceitem';

@Component({
  	selector: 'app-appointmentpaymentreceipt',
  	templateUrl: './appointmentpaymentreceipt.component.html',
  	styleUrls: ['./appointmentpaymentreceipt.component.scss']
})
export class AppointmentpaymentreceiptComponent implements OnInit {
	private SelectedAppointment : any;
	private InvoiceForm : FormGroup;
	private Invoice : PatientInvoice;
	private InvoiceDetails : PatientInvoiceItem[] = [];

	private DateTest : Date;

	constructor(private PatientService : PatientService, private ActivatedRoute : ActivatedRoute, private FormBuilder : FormBuilder) {
		this.InvoiceForm = this.FormBuilder.group({
			MRN : [''],
			Date : [],
			VisitNature : [''],
			SlipNumber : [''],
			PatientName : [''],
			Consultant : [''],
			SpouseName : [''],
			Package : [''],
			CurrentAmount : [''],
			PreviousBalance : [''],
			AmountToPay : [''],
			PaidAmount : [''],
			NewBalance : [''],
			Remarks : [''],
			ChequeNumber : [''],
			Bank : [''],
			Total : [''],
			CreditCardChargesPercentage : [''],
			GrossAmount : [''],
			NetAMount : [''],
		});
	}

	ngOnInit() {

		this.ActivatedRoute.params.subscribe(params => {
            if(params['id']) {
                this.PatientService.GetAppointmentDetails(params['id']).subscribe((res : Appointment) => {
					this.SelectedAppointment = res;
					console.log(this.SelectedAppointment);
					
					let a : string = '';

					if(this.SelectedAppointment.patient.partner == null)
						a = '';
					else
						a = this.SelectedAppointment.patient.partner.firstName;

					this.Invoice = this.SelectedAppointment.patientInvoice;
					this.InvoiceDetails = this.SelectedAppointment.patientInvoice.patientInvoiceItems;

					// var datePipe = new DatePipe('d/M/y');
					// console.log(datePipe);
					// var r = datePipe.transform(new Date(), 'dd/MM/yyyy');
					// console.log(r);

					this.DateTest = new Date(this.SelectedAppointment.appointmentDate);

					this.InvoiceForm.patchValue({
						MRN : this.SelectedAppointment.patient.mrn || '',
						// Date : this.SelectedAppointment.appointmentDate || '',
						// Date : new Date(this.SelectedAppointment.appointmentDate).toString(),
						VisitNature : this.SelectedAppointment.visitNature.nature || '',
						SlipNumber : this.SelectedAppointment.patientInvoice.slipNumber || '',
						PatientName : this.SelectedAppointment.patient.firstName || '',
						Consultant : this.SelectedAppointment.consultant.name || '',
						SpouseName : a,
						Package : "XYZ" || '',
						CurrentAmount : this.SelectedAppointment.patientInvoice.amountToPay || '',
						PreviousBalance : this.SelectedAppointment.patientInvoice.balanceAmount || '',
						AmountToPay : this.SelectedAppointment.patientInvoice.amountToPay || '',
						Remarks : this.SelectedAppointment.patientInvoice.invoiceRemarks || ''
					});
					// console.log("InvoiceForm", this.InvoiceForm);
                });
            }
        });
	}

	GetDetails() {
		this.PatientService.GetPatientInvoice(this.SelectedAppointment.patientInvoiceId).subscribe((res : PatientInvoice) => {
			this.Invoice = res;
			console.log(this.Invoice);
			
			this.InvoiceDetails = this.Invoice.PatientInvoiceItems;
			console.log(this.InvoiceDetails);		
		});
	}
}