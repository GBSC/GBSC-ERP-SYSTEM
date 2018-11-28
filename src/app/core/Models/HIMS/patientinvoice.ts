import { Patient } from "./patient";
import { Appointment } from "./appointment";
import { PatientInvoiceItem } from "./patientinvoiceitem";

export interface PatientInvoice {
	PatientInvoiceId : number,
	SlipNumber : number,
	DateCreated : number,
	InvoiceType : number,
	AmountToPay : number,
	PreviousAmout : number,
	PaidAmount : number,
	BalanceAmount : number,
	InvoiceRemarks : number,
	Consultant : number,
	PaymentMethod : number,
	ChequeNumber : number,
	Bank : number,
	PatientId : number,
	Patient : Patient,
	AppointmentId : number,
	Appointment : Appointment,
	PatientInvoiceItems : PatientInvoiceItem[]
};