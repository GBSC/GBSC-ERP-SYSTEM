import { PatientInvoice } from "./patientinvoice";

export interface PatientInvoiceItem {
	PatientInvoiceItemId : number,
	Name : string,
	Quantity : number,
	GrossAmount : number,
	DiscountAmount : number,
	NetAmount : number,
	PackageId : number,
	Package : any,
	TestId : number,
	Test : any,
	PatientInvoiceId : number,
	PatientInvoice : PatientInvoice,
};