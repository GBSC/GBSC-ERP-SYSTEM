import { MasterPayrollDetail } from "../model/MasterPayrollDetail";

export class MasterPayroll {

    masterPayrollId: number;
    bankTransferCode: number;
    currencyId: number;
    bankId: number;
    MasterPayrollDetails : MasterPayrollDetail[];
}