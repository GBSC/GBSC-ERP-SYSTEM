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
import { PayrollService } from './payroll/services/payroll.service';
 
import { LeaveSetupService } from './hrm/leave/leaveSetup.service';
import { HrmsService } from './hrm/hrmsSetup/services/hrms.service'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevExtremeModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';   



@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent
    ],
    imports: [
        LayoutModule,
        BrowserModule, 
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        AuthModule,
        FormsModule,
        ReactiveFormsModule,
        DevExtremeModule,
        HttpClientModule
    ],
    providers: [ScriptLoaderService, SetupService, EmployeeService,LeaveSetupService, LeaveService, HrmsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
