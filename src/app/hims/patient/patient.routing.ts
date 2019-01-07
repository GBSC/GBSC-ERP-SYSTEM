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
import { DailySemenAnalysisComponent } from './daily-semen-analysis/daily-semen-analysis.component';

import { AppointmentSheetComponent } from './Reports/appointment-sheet/appointment-sheet.component';
import { RegistrationlistComponent } from './Reports/registrationlist/registrationlist.component';
import { NewPatientSheetFcKarachiComponent } from './Reports/new-patient-sheet-fc-karachi/new-patient-sheet-fc-karachi.component';
import { DailyActivityReportComponent } from './Reports/daily-activity-report/daily-activity-report.component';
import { FcProcedureMovementSummaryComponent } from './Reports/fc-procedure-movement-summary/fc-procedure-movement-summary.component';
import { FcConsultationMovementSummaryComponent } from './Reports/fc-consultation-movement-summary/fc-consultation-movement-summary.component';
import { SemenConsultationMovementSummaryComponent } from './Reports/semen-consultation-movement-summary/semen-consultation-movement-summary.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { DailyProcedureComponent } from './daily-procedure/daily-procedure.component';
import { DailySemenAnalysisViewComponent } from './daily-semen-analysis-view/daily-semen-analysis-view.component';
import { BloodConsultationMovementSummaryComponent } from './Reports/blood-consultation-movement-summary/blood-consultation-movement-summary.component';


import { MedicineDetailsComponent } from './Reports/medicine-details/medicine-details.component';
import { ConsultantActivityDetailsComponent } from './Reports/consultant-activity-details/consultant-activity-details.component';
import { SubsiquentSemenFreezingListComponent } from './Reports/subsiquent-semen-freezing-list/subsiquent-semen-freezing-list.component';
import { NewPatientSheetSemenKarachiComponent } from './Reports/new-patient-sheet-semen-karachi/new-patient-sheet-semen-karachi.component';
import { NewPatientSheetBloodKarachiComponent } from './Reports/new-patient-sheet-blood-karachi/new-patient-sheet-blood-karachi.component';
import { TotalPatientReferenceSummaryComponent } from './Reports/total-patient-reference-summary/total-patient-reference-summary.component';
import { SemenPatientReferenceSummaryComponent } from './Reports/semen-patient-reference-summary/semen-patient-reference-summary.component';
import { BloodTestReferenceSummaryComponent } from './Reports/blood-test-reference-summary/blood-test-reference-summary.component';
import { FcPatientReferenceSummaryComponent } from './Reports/fc-patient-reference-summary/fc-patient-reference-summary.component';
import { NewFcClinicPatientSummaryComponent } from './Reports/new-fc-clinic-patient-summary/new-fc-clinic-patient-summary.component';
import { DailySemenAnalysisSheetComponent } from './Reports/daily-semen-analysis-sheet/daily-semen-analysis-sheet.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'patient',
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
<<<<<<< HEAD
=======
            { path: 'dailysemenanalysis', component: DailySemenAnalysisComponent },
            { path: 'dailyprocedure', component: DailyProcedureComponent },
            { path: 'dailysemenanalysisview', component: DailySemenAnalysisViewComponent },
>>>>>>> 989fc8cb58daeccd112ddd1a19627eb3494c5d9d

            // { path: 'patientinvoiceview/:mrn', component: PatientInvoiceViewComponent },
            // { path: 'appointmentpaymentreceipt/:id', component: AppointmentpaymentreceiptComponent},
            {
                path: 'patient',
                children: [
                    { path: 'testcategory', component: TestCategoryComponent },
                    { path: 'testtype', component: TestTypeComponent },
                    { path: 'test', component: HimsSetupTestComponent },
                    { path: 'diagnose', component: DiagnosisComponent },
                    { path: 'reference', component: PatientReferenceComponent },
                    { path: 'consultant', component: ConsultantComponent },
                    { path: 'package', component: PackageComponent },
                    { path: 'procedure', component: ProcedureComponent },
                    { path: 'visitnature', component: VisitnatureComponent }
                ]
            },

            {
                path: "report",
                children: [
                    { path: 'registrationlist', component: RegistrationlistComponent },
                    { path: 'appointmentsheet', component: AppointmentSheetComponent },
                    { path: 'dailyactivity', component: DailyActivityReportComponent },
                    { path: 'bloodconsultationmovementsummary', component: BloodConsultationMovementSummaryComponent },
                    { path: 'semenconsultationmovementsummary', component: SemenConsultationMovementSummaryComponent },
                    { path: 'fcConsultationmovementsummary', component: FcConsultationMovementSummaryComponent },
                    { path: 'newpatientsheetfckarachi', component: NewPatientSheetFcKarachiComponent },
                    { path: 'medicinedetails', component: MedicineDetailsComponent },
                    { path: 'consultantactivitydetails', component: ConsultantActivityDetailsComponent },
                    { path: 'newpatientsheetsemenkarachi', component: NewPatientSheetSemenKarachiComponent },
                    { path: 'newpatientsheetbloodkarachi', component: NewPatientSheetBloodKarachiComponent },
                    { path: 'totalpatientreferencesummary', component: TotalPatientReferenceSummaryComponent },
                    { path: 'semenpatientreferencesummary', component: SemenPatientReferenceSummaryComponent },
                    { path: 'subsiquentsemenfreezinglist', component: SubsiquentSemenFreezingListComponent },
                    { path: 'fcpatientreferencesummary', component: FcPatientReferenceSummaryComponent },
                    { path: 'bloodtestreferencesummary', component: BloodTestReferenceSummaryComponent },
                    { path: 'newfcclinicpatientsummary', component: NewFcClinicPatientSummaryComponent },
                    { path: 'dailysemenanalysissheet', component: DailySemenAnalysisSheetComponent },
                    { path: 'fcproceduremovementsummary', component: FcProcedureMovementSummaryComponent }


                ]
            }




        ]

    }

]);