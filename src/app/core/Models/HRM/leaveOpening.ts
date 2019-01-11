import { LeaveOpeningDetail } from "./leaveOpeningDetail";

export class LeaveOpening {

    LeaveOpeningId: number;
    Remarks: string;
    IsProcessed: boolean;
    UserId: number;
    LeaveYearId: number;
    LeaveOpeningDetails: LeaveOpeningDetail[];
}