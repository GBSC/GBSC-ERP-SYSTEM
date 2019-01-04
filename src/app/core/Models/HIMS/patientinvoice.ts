import { Patient } from "./patient";
import { Appointment } from "./appointment";
import { PatientInvoiceItem } from "./patientinvoiceitem";
import { PatientInvoiceReturn } from "./PatientInvoiceReturn";

export interface PatientInvoice {
    PatientInvoiceId: number,
    SlipNumber: number,
    DateCreated: Date,
    InvoiceType: number,
    TotalPrice: number,
    TotalAmountPaid: number,
    TotalBalance: number,
    LastPaidAmount: number,
    InvoiceRemarks: number,
    Consultant: number,
    PaymentMethod: number,
    ChequeNumber: number,
    Bank: number,
    CreditCardChargesAmount: number,
    CreditCardChargesPercentage: number,
    TotalGrossAmount: number,
    TotalDiscountAmount: number,
    TotalNetAmount: number,
    PatientId: number,
    Patient: Patient,
    AppointmentId: number,
    Appointment: Appointment,
    PatientInvoiceReturnId: number,
    PatientInvoiceReturn: PatientInvoiceReturn,
    PatientInvoiceItems: PatientInvoiceItem[]
};