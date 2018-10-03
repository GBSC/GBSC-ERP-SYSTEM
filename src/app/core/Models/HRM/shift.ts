import { UserRosterAttendanceAttendanceFlag } from "./userRosterAttendanceAttendanceFlag";
import { AssignRosterShift } from "./assignRosterShift";

export class Shift {

    shiftsId: number;
    shiftCode: number;
    shiftTitle: string;
    graceTime: Date;
    isMultiple: number;
    overTimeStartTime: Date;
    minimumOverTime: Date;
    inTimeShiftThreshold: boolean;
    outTimeShiftThreshold: boolean;
    shiftHours: number;
    overTimeRate: number;
    UserRosterAttendanceAttendanceFlags : UserRosterAttendanceAttendanceFlag[];
    AssignRosterShifts : AssignRosterShift[];
}