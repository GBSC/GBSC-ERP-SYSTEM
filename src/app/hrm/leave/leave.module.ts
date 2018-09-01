import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DevExtremeModule } from 'devextreme-angular';
import { routing } from './leave.routing';
import { RootComponent } from '../leave/root/root.component';
import { LeavepolicyComponent } from '../leave/leavesetup/leavepolicy/leavepolicy.component';
import { LeavepurposeComponent } from '../leave/leavesetup/leavepurpose/leavepurpose.component';
import { LeaveyearsetupComponent } from '../leave/leavesetup/leaveyearsetup/leaveyearsetup.component';
import { LeaverequestComponent } from '../leave/leaverequest/leaverequest.component';
import { EmployeeleaveopeningComponent } from '../leave/leaveadmin/employeeleaveopening/employeeleaveopening.component';
import { UploadleaverequestComponent } from '../leave/leaveadmin/uploadleaverequest/uploadleaverequest.component';
import { LeaveService } from './leave.service';
import { FooterComponent } from '../leave/shared/footer/footer.component';
import { HeaderComponent } from '../leave/shared/header/header.component';
import { MenuComponent } from '../leave/shared/menu/menu.component';
import { LeaveSetupService } from './leaveSetup.service';
import { LeavetypeComponent } from './leavesetup/leavetype/leavetype.component';
import { LeaveapprovalComponent } from './leavesetup/leaveapproval/leaveapproval.component';
import { LeavedaytypeComponent } from './leavesetup/leavedaytype/leavedaytype.component';
import { LeaveeligibilityComponent } from './leavesetup/leaveeligibility/leaveeligibility.component';
// import { EmployeeService } from './employee/services/employee.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        DevExtremeModule,
        routing
    ],
    declarations: [
        FooterComponent,
        HeaderComponent,
        MenuComponent,
        RootComponent,
        LeavepolicyComponent,
        LeavetypeComponent,
        LeavedaytypeComponent,
        LeaveapprovalComponent,
        LeavepurposeComponent,
        LeaveeligibilityComponent,
        LeaveyearsetupComponent,
        LeaverequestComponent,
        EmployeeleaveopeningComponent,
        UploadleaverequestComponent
    ],
    exports: [],
    providers: [LeaveService, LeaveSetupService]
})
export class LeaveModule { }
