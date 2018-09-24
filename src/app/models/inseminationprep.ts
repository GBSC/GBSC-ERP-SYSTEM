import { InseminationPrepDetail } from "./InseminationPrepDetail";

export class InseminationPrep{

    InseminationPrepId : number;

    InseminationPrepDate:Date;
    TreatmentNumber :string;
    PatientId  : number;
    ConsultantId  : number;
    CycleNumber:string;
    TreatmentType:string;
    PrepFor:string;
    CollectionNumber:string;
    CollectionDate:Date;
    SampleType:string;
    ProcedureNumber:string;
    DetailInseminationDate:Date;
    Method:string;
    Volume:string;
    FinalVolume : string;
    TotalCount:string;
    MotileCount:string;
    RapidLinearProgression:string;
    MobileCount:string;
    LinearProgression:string;
    TimeCompleted:string;
    MobileCountUnit:string;
    NonLinearProgression:string;
    Comments:string;
    SpecialComment:string;
    InseminationPrepDetail : InseminationPrepDetail;


}