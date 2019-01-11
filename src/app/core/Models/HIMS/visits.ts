
import { VisitDiagnosis } from './visitdiagnoses';
import { PatientVital } from './patientvitals';
export interface Visits {

    VisitId: number,
    Description: string,
    StartTime: Date,
    EndTime: Date,
    IsActive: boolean,
    PatientVitalId: number,
    VisitNoteId: number,
    PatientId: number
    PatientVital: PatientVital;
    VisitDiagnosis: VisitDiagnosis[]
}