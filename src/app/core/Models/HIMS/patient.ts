import { Spouse } from "./spouse";
import { PatientPackage } from "./PatientPackage";
import { PatientInvoice } from "./patientinvoice";
export interface Patient {

    PatientId: number,
    Date: Date,
    RegCity: string,
    VisitNatureId: number,
    mrn: string,
    firstName: string,
    MiddleName: string,
    LastName: string,
    fullName: string,
    DOB: Date,
    PlaceOfBirth: string,
    Occupation: string,
    NIC: string,
    Gender: string,
    PhoneNumber: string,
    Remarks: string,
    ResidenceAddress: string,
    OfficeAddress: string,
    OfficeTel: string,
    ForeignAddress: string,
    Country: string,
    City: string,
    State: string,
    PostalCode: string,
    Initial: string,
    AuthorizedPerson: string,
    PrivateHospital: string,
    PrivatePatientCons: string,
    display: string,
    Document: Document,
    partner: Spouse,
    patientPackage : PatientPackage,
    patientInvoices : PatientInvoice[]
}


