import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PatientService } from '../patient/services/patient.services';
import { routing } from './patient.routing';
import { RootComponent } from './root/root.component';
import { RegistrationComponent } from '../patient/registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { DiagnosesComponent } from './diagnoses/diagnoses.component';
import { RecentvisitsComponent } from './recentvisits/recentvisits.component';
import { FamilyComponent } from './family/family.component';
import { HealthTrendSummaryComponent } from './health-trend-summary/health-trend-summary.component';
import { AllergiesComponent } from './allergies/allergies.component';
import { WeightGraphComponent } from './weight-graph/weight-graph.component';
import { VitalsComponent } from './vitals/vitals.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { LatestobservationComponent } from './latestobservation/latestobservation.component';
import { PatientvitalsComponent } from './patientvitals/patientvitals.component';
import { AdmitinpatientComponent } from './admitinpatient/admitinpatient.component';
import { GeneralactionsComponent } from './generalactions/generalactions.component';
import { VisitnoteComponent } from './visitnote/visitnote.component';
import { VisitsComponent } from './visits/visits.component';
import { AppointmentsblockComponent } from './appointmentsblock/appointmentsblock.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FindPatientComponent } from './find-patient/find-patient.component';
import { AppointmentSchedulingComponent } from './appointment-scheduling/appointment-scheduling.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DxButtonModule, DxDataGridModule, DevExtremeModule } from 'devextreme-angular';
import { PaymentreceiptComponent } from './paymentreceipt/paymentreceipt.component';
// import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    DevExtremeModule,
    DxDataGridModule,
    DxButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    //SharedModule,
    HttpClientModule
  ],
  declarations: [

    RootComponent,
    RegistrationComponent,
    ProfileComponent,
    DiagnosesComponent,
    RecentvisitsComponent,
    FamilyComponent,
    HealthTrendSummaryComponent,
    AllergiesComponent,
    WeightGraphComponent,
    VitalsComponent,
    AppointmentsComponent,
    LatestobservationComponent,
    PatientvitalsComponent,
    AdmitinpatientComponent,
    GeneralactionsComponent,
    VisitnoteComponent,
    VisitsComponent,
    AppointmentsblockComponent,
    HomeComponent,
    FindPatientComponent,
    AppointmentSchedulingComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    PaymentreceiptComponent
  ],
  providers: [
    PatientService
  ]
})
export class PatientModule { }
