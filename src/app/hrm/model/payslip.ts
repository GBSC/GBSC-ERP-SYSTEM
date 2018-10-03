import { UserLoanPayslip } from "./userLoanPayslip";

export class PaySlip {

    paySlipid: number;
    from: Date;
    till: Date;
    paymentDate: Date;
    hours: Date;
    days: number;
    grossAmount: number;
    taxAmount: number;
    pfDeductionAmount: number;
    loanDeductionAmount: number;
    netAmount: number; 
    monthlyUserSalaryId: number; 
    userId: number; 
    UserLoanPayslips : UserLoanPayslip[];
    
}