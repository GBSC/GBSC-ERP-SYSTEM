import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService, ModuleGuardService, AccountService, DashboardService, BioChemistryService, InseminationprepService, ConsultantService, PatientService, AttendanceService, AttendancesetupService, EmployeeService, LeaveService, LeaveSetupService, PayrollService, PayrollSetupService, HrmsService, SetupService, SystemAdministrationService, InventorysystemService, PharmacyService, SuperadminserviceService } from '.';
import { ApiService } from './Services/api.service';
import { TreatmentService } from './Services/HIMS/treatment.service';
import { MedicineService } from './Services/HIMS/medicine.service';
import { ProtocolService } from './Services/HIMS/protocol.service';
import { PatientclinicalrecordService } from './Services/HIMS/patientclinicalrecord.service';
import { EmbryologyService } from './Services/HIMS/Lab/embryology.service';
import { TvopuService } from './Services/HIMS/Lab/tvopu.service';
import { EmbryologistService } from './Services/HIMS/Lab/embryologist.service';

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
        ProtocolService,
        PatientclinicalrecordService,
        EmbryologyService,
        TvopuService,
        EmbryologistService
    ]
})
export class CoreModule { }