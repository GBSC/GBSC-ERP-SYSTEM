import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService, ModuleGuardService, AccountService, DashboardService, BioChemistryService, InseminationprepService, ConsultantService, PatientService, AttendanceService, AttendancesetupService, EmployeeService, LeaveService, LeaveSetupService, PayrollService, PayrollSetupService, HrmsService, SetupService, SystemAdministrationService, InventorysystemService, PharmacyService, SuperadminserviceService } from '.';
import { ApiService } from './Services/api.service';
import { TreatmentService } from './Services/HIMS/treatment.service';
import { MedicineService } from './Services/HIMS/medicine.service';
import { ProtocolService } from './Services/HIMS/protocol.service';

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
        SuperadminserviceService,
        TreatmentService,
        MedicineService,
        ProtocolService
    ]
})
export class CoreModule { }