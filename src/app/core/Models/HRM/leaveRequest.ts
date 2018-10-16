import { LeaveRequestDetail } from "./leaveRequestDetail";

export class LeaveRequest {

    leaveRequestId: number;
    requestDate: Date;
    isApproved: boolean; 
    LeaveRequestDetails: LeaveRequestDetail[];
}