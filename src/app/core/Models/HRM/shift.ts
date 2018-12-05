import { AssignRosterShift } from "./assignRosterShift";
import { ShiftAttendanceFlag } from "./userRosterAttendanceAttendanceFlag";

export class Shift {

    shiftsId: number;
    shiftCode: number;
    shiftTitle: string;
    duties : string;
    day : string;
    startTime : Date;
    endTime : Date;
    description : string;
    graceTime: Date;
    isMultiple: number;
    overTimeStartTime: Date;
    minimumOverTime: Date;
    inTimeShiftThreshold: Date;
    outTimeShiftThreshold: Date;
    shiftHours: number;
    overTimeRate: number;
    ShiftAttendanceFlags: ShiftAttendanceFlag[];
    AssignRosterShifts: AssignRosterShift[];
}