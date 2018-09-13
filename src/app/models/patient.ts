//import { Spouse } from "src/app/models/spouse";
import { Spouse } from '../../../src/app/models/spouse'
// import { Reference } from "src/app/models/reference";

export class Patient {

    PatientId: number;
    Date: Date;
    RegCity: string;
    VisitNature: string;
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
    // Reference : Reference;

}


