import { PatientInvoice } from "./patientinvoice";
import { Patient } from "./patient";
import { PatientInvoiceReturnItem } from "./PatientInvoiceReturnItem";

export interface PatientInvoiceReturn {
    PatientInvoiceReturnId: number,
    InvoiceReturnNumber: string,
    ReturnDate: Date,
    Remarks: string,
    TotalReturnAmount: number,
    PatientInvoiceId: number,
    PatientInvoice: PatientInvoice,
    PatientId: number,
    Patient: Patient,
    PatientInvoiceReturnItems: PatientInvoiceReturnItem[]
}