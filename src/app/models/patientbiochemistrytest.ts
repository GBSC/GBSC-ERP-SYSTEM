import { BioChemistryTestDetail } from "./biochemistrytestdetail";

export class PatientBiochemistryTest{

    PatientBioChemistryTestId : number;

    PatientId : number;

    ConsultantId : number;

    IsRandon : boolean;

    IsOnTreatment : boolean;

    TreatmentNumber : string;

    CycleNumber : string;

    PackageId : string;

    BioChemistryTestDetails : BioChemistryTestDetail[];
}