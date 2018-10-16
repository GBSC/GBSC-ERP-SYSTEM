import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevExtremeModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from './LowerCaseUrlSerializer';
import { SetupService } from './core/Services/HRM/Setup/setup.service';
import { EmployeeService } from './core/Services/HRM/Employee/employee.service';
import { LeaveSetupService } from './core/Services/HRM/Leave/leaveSetup.service';
import { LeaveService } from './core/Services/HRM/Leave/leave.service';
import { HrmsService } from './core/Services/HRM/Setup/hrms.service';
import { ApiService } from './core/Services/api.service';
import { CoreModule } from './core/core.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,

    ],
    imports: [
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DevExtremeModule,
        HttpClientModule
    ],
    providers: [{ provide: UrlSerializer, useClass: LowerCaseUrlSerializer },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
        ScriptLoaderService],
    bootstrap: [AppComponent]
})
export class AppModule { }
