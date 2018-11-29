import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';

import { RegistrationComponent } from '../patient/registration/registration.component';
import { ProfileComponent } from '../patient/profile/profile.component';
import { AllergiesComponent } from '../patient/allergies/allergies.component';

import { DiagnosesComponent } from '../patient/diagnoses/diagnoses.component';
import { RecentvisitsComponent } from '../patient/recentvisits/recentvisits.component';
import { LatestobservationComponent } from '../patient/latestobservation/latestobservation.component';
import { FamilyComponent } from '../patient/family/family.component';
import { HealthTrendSummaryComponent } from '../patient/health-trend-summary/health-trend-summary.component';
import { WeightGraphComponent } from '../patient/weight-graph/weight-graph.component';
import { VitalsComponent } from '../patient/vitals/vitals.component';
import { AppointmentsComponent } from '../patient/appointments/appointments.component';
import { PatientvitalsComponent } from '../patient/patientvitals/patientvitals.component';
import { AdmitinpatientComponent } from '../patient/admitinpatient/admitinpatient.component';
import { GeneralactionsComponent } from '../patient/generalactions/generalactions.component';
import { VisitnoteComponent } from '../patient/visitnote/visitnote.component';
import { ViewallAppointmetsComponent } from '../patient/viewall-appointmets/viewall-appointmets.component';
import { VisitsComponent } from '../patient/visits/visits.component';
import { AppointmentsblockComponent } from '../patient/appointmentsblock/appointmentsblock.component';
import { FindPatientComponent } from '../patient/find-patient/find-patient.component';
import { HomeComponent } from '../patient/home/home.component';
import { AppointmentscheduleComponent } from '../patient/appointmentschedule/appointmentschedule.component';
import { ConsultantComponent } from '../patient/consultant/consultant.component';
import { HimsSetupTestComponent } from '../patient/hims-setup-test/hims-setup-test.component';
import { VisitnatureComponent } from '../patient/patientsetup/visitnature/visitnature.component';
import { VisitdetailComponent } from '../patient/visitdetail/visitdetail.component';
import { DiagnosisComponent } from '../patient/patientsetup/diagnosis/diagnosis.component';
import { ActiveVisitsComponent } from '../patient/active-visits/active-visits.component';
import { PaymentreceiptComponent } from '../patient/paymentreceipt/paymentreceipt.component';
import { PackageComponent } from '../patient/package/package.component';
import { PatientReferenceComponent } from './patient-reference/patient-reference.component';
import { ReportsComponent } from './Reports/reports/reports.component';
import { TestTypeComponent } from './test-type/test-type.component';
import { TestCategoryComponent } from './test-category/test-category.component';
import { AppointmentpaymentreceiptComponent } from './appointmentpaymentreceipt/appointmentpaymentreceipt.component';
import { PatientInvoiceViewComponent } from './patient-invoice-view/patient-invoice-view.component';
import { PatientInvoiceReturnComponent } from './patient-invoice-return/patient-invoice-return.component';
import { InvoiceReturnViewComponent } from './invoice-return-view/invoice-return-view.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'hims/patient',
        component: RootComponent,
        // canActivate: [AuthGuardService, ModuleGuardService],
        children: [

            { path: 'updatepatient/:id', component: RegistrationComponent },
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'registration', component: RegistrationComponent },
            { path: 'profile/:id', component: ProfileComponent },
            { path: 'diagnoses', component: DiagnosesComponent },
            { path: 'recentvisits', component: RecentvisitsComponent },
            { path: 'latestobservation', component: LatestobservationComponent },
            { path: 'allergies', component: AllergiesComponent },
            { path: 'vitals', component: VitalsComponent },
            { path: 'appointments', component: AppointmentsComponent },
            { path: 'patientvitals/:id', component: PatientvitalsComponent },
            { path: 'admitinpatient', component: AdmitinpatientComponent },
            { path: 'visitnote', component: VisitnoteComponent },
            { path: 'visits/:id', component: VisitsComponent },
            { path: 'appointmentsblock', component: AppointmentsblockComponent },
            { path: 'findpatient', component: FindPatientComponent },
            { path: 'appointmentschedule', component: AppointmentscheduleComponent },
            { path: 'visitdetail/:id', component: VisitdetailComponent },
            { path: 'reports', component: ReportsComponent },
            { path: 'viewallappoinment', component: ViewallAppointmetsComponent },
            { path: 'paymentreceipt', component: PaymentreceiptComponent },
            { path: 'paymentreceipt/:id', component: PaymentreceiptComponent },
            { path: 'activevisits', component: ActiveVisitsComponent },
            { path: 'patientinvoicereturn', component: PatientInvoiceReturnComponent },
            { path: 'patientinvoicereturnview', component: InvoiceReturnViewComponent },

            // { path: 'patientinvoiceview/:mrn', component: PatientInvoiceViewComponent },
            // { path: 'appointmentpaymentreceipt/:id', component: AppointmentpaymentreceiptComponent},
            {
                path: "setup",
                children: [
                    { path: 'testcategory', component: TestCategoryComponent },
                    { path: 'testtype', component: TestTypeComponent },
                    { path: 'test', component: HimsSetupTestComponent },
                    { path: 'diagnose', component: DiagnosisComponent },
                    { path: 'reference', component: PatientReferenceComponent },
                    { path: 'consultant', component: ConsultantComponent },
                    { path: 'package', component: PackageComponent },
                    { path: 'visitnature', component: VisitnatureComponent }
                ]
            }
        ]
    }
]);