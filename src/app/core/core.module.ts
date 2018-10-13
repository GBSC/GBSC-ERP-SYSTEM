import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService, ModuleGuardService, AccountService, DashboardService, BioChemistryService, InseminationprepService, ConsultantService, PatientService, AttendanceService, AttendancesetupService, EmployeeService, LeaveService, LeaveSetupService, PayrollService, PayrollSetupService, HrmsService, SetupService, SystemAdministrationService, InventorysystemService, PharmacyService, SuperadminserviceService } from '.';
import { ApiService } from './Services/api.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        HttpClientModule
    ],
    providers: [
        ApiService,
        AuthGuardService,
        ModuleGuardService,
        AccountService,
        DashboardService,
        //FinanceService,
        BioChemistryService,
        InseminationprepService,
        ConsultantService,
        PatientService,
        AttendanceService,
        AttendancesetupService,
        EmployeeService,
        LeaveService,
        LeaveSetupService,
        PayrollService,
        PayrollSetupService,
        HrmsService,
        SetupService,
        SystemAdministrationService,
        InventorysystemService,
        PharmacyService,
        SuperadminserviceService
    ],
    declarations: []
})
export class CoreModule { }