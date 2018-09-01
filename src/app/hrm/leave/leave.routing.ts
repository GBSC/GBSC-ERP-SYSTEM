import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from '../leave/root/root.component';
import { LeavepurposeComponent } from '../leave/leavesetup/leavepurpose/leavepurpose.component';
import { LeavepolicyComponent } from '../leave/leavesetup/leavepolicy/leavepolicy.component';
import { LeaveyearsetupComponent } from '../leave/leavesetup/leaveyearsetup/leaveyearsetup.component';
import { LeavetypeComponent } from '../leave/leavesetup/leavetype/leavetype.component';
import { LeaveapprovalComponent } from './leavesetup/leaveapproval/leaveapproval.component';
import { LeavedaytypeComponent } from './leavesetup/leavedaytype/leavedaytype.component';
import { LeaveeligibilityComponent } from './leavesetup/leaveeligibility/leaveeligibility.component';
import { EmployeeleaveopeningComponent } from './leaveadmin/employeeleaveopening/employeeleaveopening.component';
import { UploadleaverequestComponent } from './leaveadmin/uploadleaverequest/uploadleaverequest.component';
// import { LeaverequestComponent } from '../leave/leaverequest/leaverequest.component';
// import { EmployeeleaveopeningComponent } from '../leave/leaveadmin/employeeleaveopening/employeeleaveopening.component';
// import { UploadleaverequestComponent } from '../leave/leaveadmin/uploadleaverequest/uploadleaverequest.component';




export const routing: ModuleWithProviders = RouterModule.forChild([

    
    {
        path: 'hrm',
        children: [
            {
                path: 'leave', component: RootComponent,
                children: [
                    { path: 'leavesetup',  component: RootComponent,
                    children: [

                        { path: 'leavepurpose', component: LeavepurposeComponent },
                        { path: 'leaveyearsetup', component: LeaveyearsetupComponent },
                        { path: 'leavepolicy', component: LeavepolicyComponent },
                        { path: 'leavetype', component: LeavetypeComponent },
                        { path: 'leaveapproval', component: LeaveapprovalComponent },
                        { path: 'leavedaytype', component: LeavedaytypeComponent },
                        { path: 'leaveeligibility', component: LeaveeligibilityComponent }
                    ]
                },
                {path: 'employeeleaveopening', component: EmployeeleaveopeningComponent},
                {path: 'uploadleaverequest', component: UploadleaverequestComponent}
                ]
            }
        ]
    }

]);

