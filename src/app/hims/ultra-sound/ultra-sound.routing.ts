import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { UltraSoundPelvisComponent } from './ultra-sound-pelvis/ultra-sound-pelvis.component';





export const ultraSoundRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'ultrasound',
         component: RootComponent,
        // canActivate: [AuthGuardService, ModuleGuardService],
        children: [

              { path: 'ultrasoundpelvis', component: UltraSoundPelvisComponent },
            // { path: '', component: HomeComponent },
            // { path: 'home', component: HomeComponent },
            // { path: 'registration', component: RegistrationComponent },
            // { path: 'profile/:id', component: ProfileComponent },
            // { path: 'diagnoses', component: DiagnosesComponent },
            // { path: 'recentvisits', component: RecentvisitsComponent },
            // { path: 'latestobservation', component: LatestobservationComponent },
            // { path: 'allergies', component: AllergiesComponent },
            // { path: 'vitals', component: VitalsComponent },
            // { path: 'appointments', component: AppointmentsComponent },
            // { path: 'patientvitals/:id', component: PatientvitalsComponent },
            // { path: 'admitinpatient', component: AdmitinpatientComponent },
            // { path: 'visitnote', component: VisitnoteComponent },
            // { path: 'visits/:id', component: VisitsComponent },
            // { path: 'appointmentsblock', component: AppointmentsblockComponent },
            // { path: 'findpatient', component: FindPatientComponent },
            // { path: 'appointmentschedule', component: AppointmentscheduleComponent },
            // { path: 'visitdetail/:id', component: VisitdetailComponent },
            // { path: 'reports', component: ReportsComponent },
            // { path: 'viewallappoinment', component: ViewallAppointmetsComponent },
            // { path: 'paymentreceipt', component: PaymentreceiptComponent },
            // { path: 'paymentreceipt/:id', component: PaymentreceiptComponent },
            // { path: 'activevisits', component: ActiveVisitsComponent },
            // { path: 'patientinvoicereturn', component: PatientInvoiceReturnComponent },
            // { path: 'patientinvoicereturnview', component: InvoiceReturnViewComponent },
            // { path: 'dailysemenanalysis', component: DailySemenAnalysisComponent },
            // { path: 'dailyprocedure', component: DailyProcedureComponent },
            // { path: 'dailysemenanalysisview', component: DailySemenAnalysisViewComponent },

             




        ]

    }

]);