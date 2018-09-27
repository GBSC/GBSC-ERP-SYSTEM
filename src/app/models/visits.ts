import {PatientVital} from  '../models/patientvitals'
import { VisitDiagnosis } from './visitdiagnoses';
export  interface Visits{

    VisitId : number,
    Description : string,
    StartTime : Date,
    EndTime : Date,
    IsActive : boolean,
    PatientVitalId : number,
    VisitNoteId : number,
    PatientId : number
    PatientVital : PatientVital;
    VisitDiagnosis: VisitDiagnosis[]
}