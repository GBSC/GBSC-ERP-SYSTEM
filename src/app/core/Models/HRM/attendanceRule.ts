import { AttendanceRuleLeaveType } from "./AttendanceRuleLeaveType";

export class AttendanceRule {

    action: number;
    effectFrequency: string;
    flagCount: Date;
    exemptFlagCount: number;
    exemptMinutes: number;
    conditionalExemption: number;
    effectQuantity: number;
    effectType: number;
    attendanceFlagId: number;
    groupId: number;
    attendanceRuleLeaveTypes: AttendanceRuleLeaveType[];

}