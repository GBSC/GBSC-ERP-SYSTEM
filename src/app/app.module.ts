import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";
import { SetupService } from './hrm/hrmsSetup/services/setup.service';
import { EmployeeService } from './hrm/employee/services/employee.service';
import { LeaveService } from './hrm/leave/leave.service';
<<<<<<< HEAD
import { HrmsService } from './hrm/hrmsSetup/services/hrms.service';
import { PayrollService } from './payroll/services/payroll.service';
 
=======
import { LeaveSetupService } from './hrm/leave/leaveSetup.service';
import { HrmsService } from './hrm/hrmsSetup/services/hrms.service'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevExtremeModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';   
>>>>>>> 101e24f1c0723e12b4993caf674e3b62e636c45a



@NgModule({
    declarations: [
        ThemeComponent,
<<<<<<< HEAD
        AppComponent,
 

=======
        AppComponent   
>>>>>>> 101e24f1c0723e12b4993caf674e3b62e636c45a
    ],
    imports: [
        LayoutModule,
        BrowserModule, 
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
<<<<<<< HEAD
        AuthModule
=======
        AuthModule,
        FormsModule,
        ReactiveFormsModule,
        DevExtremeModule,
        HttpClientModule
>>>>>>> 101e24f1c0723e12b4993caf674e3b62e636c45a
    ],
    providers: [ScriptLoaderService, SetupService, EmployeeService,LeaveSetupService, LeaveService, HrmsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
