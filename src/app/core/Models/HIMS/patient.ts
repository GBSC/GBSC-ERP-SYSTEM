import { Spouse } from "./spouse";
export interface Patient {

    PatientId: number;
    Date: Date;
    RegCity: string;
    VisitNatureId: number;
    MRN: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    FullName: string;
    DOB: Date;
    PlaceOfBirth: string;
    Occupation: string;
    NIC: string;
    Gender: string;
    PhoneNumber: string;
    Remarks: string;
    ResidenceAddress: string;
    OfficeAddress: string;
    OfficeTel: string;
    ForeignAddress: string;
    Country: string;
    City: string;
    State: string;
    PostalCode: string;
    Initial: string;
    AuthorizedPerson: string;
    PrivateHospital: string;
    PrivatePatientCons: string;
    display: string;
    Document: Document;
    partner: Spouse;
}


