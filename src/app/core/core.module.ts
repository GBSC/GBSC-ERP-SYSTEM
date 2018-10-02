import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '.';
import { AuthGuard, JwtService, AuthenticationService, AlertService } from './Services/Auth';
import { AccountService } from './Services/Account/service.service';
import { BioChemistryService } from './Services/HIMS/Lab/bio-chemistry.service';
import { InseminationprepService } from './Services/HIMS/Lab/inseminationprep.service';
import { ConsultantService } from './Services/HIMS/labconsultant.service';
import { PatientService } from './Services/HIMS/labpatient.service';
import { InventorysystemService } from './Services/Inventory/Inventorysystem.service';
import { SuperadminserviceService } from './Services/SuperAdmin/superadminservice.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SystemAdministrationService } from '../hrm/services/systemadministration.services';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    //  UserService,
    ApiService,
    JwtService,
    AuthGuard,
    AuthenticationService,
    AlertService,
    AccountService,
    BioChemistryService,
    InseminationprepService,
    ConsultantService,
    PatientService,
    SystemAdministrationService,
    InventorysystemService,
    SuperadminserviceService
  ],
  declarations: []
})
export class CoreModule { }