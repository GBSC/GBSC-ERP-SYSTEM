import { MasterPayrollDetail } from "./masterPayrollDetail";

export class MasterPayroll {

    masterPayrollId: number;
    bankTransferCode: number;
    currencyId: number;
    bankId: number;
    MasterPayrollDetails: MasterPayrollDetail[];
}