import { UserRosterAttendance } from "./userRosterAttendance";

export class MonthlyUserSalary {

    monthlyUserSalaryId: number;
    MonthStartDate: Date;
    MonthEndDate: Date;
    TotalWorkingDaysInMonth: number;
    LeaveDays: string;
    AbsentDays: string;
    OvertimeHours: Date;
    IsStopped: boolean;
    StopFrom: Date;
    StopTill: Date;
    StopSalaryId: number;
    UserSalaryId: number;
    PfPaymentId: number;
    PayslipId: number;
    PayrollId: number; 
   UserRosterAttendances: UserRosterAttendance[];
}