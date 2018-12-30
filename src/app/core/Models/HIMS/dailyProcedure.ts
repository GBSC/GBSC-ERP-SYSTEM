export interface DailyProcedure {
    DailyProcedureId: number,
    Nature: string,
    Time: Date,
    ProcedureType: string,
    DoneByNature: string,
    Remarks: string,
    PatientId: string,
    AssignedConsultantId: number,
    ProcedureId: number,
    PerformedByConsultantId: number

}