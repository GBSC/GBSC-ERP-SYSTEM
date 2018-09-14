export interface Appointment {
    AppointmentId: number;
    PatientType: string;
    TentativeTime: string;
    FinalTime: string;
    TimeIn: string;
    TimeOut: string;
    NextAppointment: string;
    VisitStatus: string;
    visitNatureId   : number;
    AppointmentDay: string;
    Remarks: string;
    ConsultantId: number;
     VisitId : number;
}