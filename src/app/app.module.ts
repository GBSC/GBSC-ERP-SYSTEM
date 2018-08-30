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
import { HrmsService } from './hrm/hrmsSetup/services/hrms.service';
import { PayrollService } from './payroll/services/payroll.service';




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
    ],
    providers: [ScriptLoaderService, SetupService, EmployeeService, LeaveService, HrmsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
