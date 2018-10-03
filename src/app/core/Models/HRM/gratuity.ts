import { GratuitySlabGratuity } from "./gratuitySlabGratuity";
import { UserSalary } from "./userSalary";

export class Gratuity {

    userGratuityId: number;
    totalSalary: number;
    gratuityAmount: number;
    from: Date;
    to: Date;
    gratuityTypeId: number;
    leavingReasonId: number;
    userId: number;
    fundSetupId: number;
   // userSalaries : UserSalary[];
    gratuitySlabGratuities : any;
    
}