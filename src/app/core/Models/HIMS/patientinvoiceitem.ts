import { PatientInvoice } from "./patientinvoice";

export interface PatientInvoiceItem {
	PatientInvoiceItemId : number,
	Nature : string,
	Description : string,
	UnitPrice : number,
	NameId : number,
	Name : string,
	Quantity : number,
	GrossAmount : number,
	DiscountPercentage : number,
	DiscountAmount : number,
	NetAmount : number,
	IsPaid : boolean,
	PatientInvoiceId : number,
	PatientInvoice : PatientInvoice,
};