import { UserRosterAttendanceAttendanceFlag } from "./userRosterAttendanceAttendanceFlag";

export class UserRosterAttendance {

    userRosterAttendanceId: number;
    attendanceDate: Date;
    isPresent: boolean;
    isOnLeave: boolean;
    checkInTime: Date;
    checkOutTime: Date;
    hoursWorked: number;
    userId: number;
    assignRosterId: number;
    monthlyUserSalaryId: number;
    leavePolicyEmployeeId: number;
   // OfficialVisitEntries: OfficialVisitEntry[];
    userRosterAttendanceAttendanceFlags: UserRosterAttendanceAttendanceFlag[];
}