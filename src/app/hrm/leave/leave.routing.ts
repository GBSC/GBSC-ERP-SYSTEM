import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from '../root/root.component';
import { LeavepurposeComponent } from '../leave/leavesetup/leavepurpose/leavepurpose.component';
import { LeavepolicyComponent } from '../leave/leavesetup/leavepolicy/leavepolicy.component';
import { LeaveyearsetupComponent } from '../leave/leavesetup/leaveyearsetup/leaveyearsetup.component';
import { LeaverequestComponent } from '../leave/leaverequest/leaverequest.component';
import { EmployeeleaveopeningComponent } from '../leave/leaveadmin/employeeleaveopening/employeeleaveopening.component';
import { UploadleaverequestComponent } from '../leave/leaveadmin/uploadleaverequest/uploadleaverequest.component';




export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'leave',
        component: RootComponent,
        children: [
            {
                path: 'leavesetup', component: RootComponent,
                children: [
                    { path: 'leavepurpose', component: LeavepurposeComponent },
                    { path: 'leaveyearsetup', component: LeaveyearsetupComponent },
                    { path: 'leavepolicy', component: LeavepolicyComponent }
                ]
            },
            {
                path: 'leaveadmin', component: RootComponent,
                children: [
                    { path: 'employeeleaveopening', component: EmployeeleaveopeningComponent },
                    { path: 'uploadleaverequest', component: UploadleaverequestComponent },
                    { path: 'leavepolicy', component: LeavepolicyComponent }
                ]
            },
            // {path: 'employeeleaveopening', component: EmployeeleaveopeningComponent},
            // {path: 'uploadleaverequest', component: UploadleaverequestComponent}
        ]
    }

]);

//   {path: 'leaverequest', component: RootComponent,
// children :[
//     // {path: 'allowancequantity', component: AllowancequantityComponent},
//     // {path: 'createsalaryfiles', component: CreatesalaryfilesComponent},
//     // {path: 'employeecompensiontransaction', component: EmployeecompensiontransactionComponent},
//     // {path: 'salarystructure', component: SalarystructureComponent},
//     // {path: 'incrementtransaction', component: IncrementtransactionComponent}
// ]},
