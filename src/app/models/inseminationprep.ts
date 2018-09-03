import { InseminationPrepDetail } from "./InseminationPrepDetail";

export class InseminationPrep{

    InseminationPrepId : number;

    DateOfInseminationPrep : Date;

    TreatmentNumber : number;

    CycleNumber : string;

    PrepFor : string;

    CollectionNumber : string;

    CollectionDate : Date;

    ProcedureNumber : string;

    ParentNumber : string;

    PackageId : number;

    ConsultantId : number;

    PatientId : number;

    InseminationPrepDetailId : number;

    InseminationPrepDetail : InseminationPrepDetail;


}