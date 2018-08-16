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
import { AppointmentSchedulingComponent } from '../patient/appointment-scheduling/appointment-scheduling.component';
import { PatientvitalsComponent } from '../patient/patientvitals/patientvitals.component';
import { AdmitinpatientComponent } from '../patient/admitinpatient/admitinpatient.component';
import { GeneralactionsComponent } from '../patient/generalactions/generalactions.component';
import { VisitnoteComponent } from '../patient/visitnote/visitnote.component';
import { VisitsComponent } from '../patient/visits/visits.component';
import { AppointmentsblockComponent } from '../patient/appointmentsblock/appointmentsblock.component';
import { FindPatientComponent } from '../patient/find-patient/find-patient.component';
import { HomeComponent } from '../patient/home/home.component';
import { ShdComponent } from '../patient/shd/shd.component';
import { ConsultantComponent } from '../patient/consultant/consultant.component';
import { HimsSetupTestComponent } from '../patient/hims-setup-test/hims-setup-test.component';






export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'patient',
        component: RootComponent,

        children: [

            { path: 'registration', component: RegistrationComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'diagnoses', component: DiagnosesComponent },
            { path: 'recentvisits', component: RecentvisitsComponent },
            { path: 'latestobservation', component: LatestobservationComponent },
            { path: 'family', component: FamilyComponent },
            { path: 'health_trend_summary', component: HealthTrendSummaryComponent },
            { path: 'allergies', component: AllergiesComponent },
            { path: 'weight_graph', component: WeightGraphComponent },
            { path: 'vitals', component: VitalsComponent },
            { path: 'appointments', component: AppointmentsComponent },
            { path: 'patientvitals', component: PatientvitalsComponent },
            { path: 'admitinpatient', component: AdmitinpatientComponent },
            { path: 'generalactions', component: GeneralactionsComponent },
            { path: 'visitnote', component: VisitnoteComponent },
            { path: 'visits', component: VisitsComponent },
            { path: 'appointmentsblock', component: AppointmentsblockComponent },
            { path: 'home', component: HomeComponent },
            { path: 'findpatient', component: FindPatientComponent },
            { path: 'shd', component: ShdComponent },
            { path: 'consultant', component: ConsultantComponent },
            { path: 'himssetuptest', component: HimsSetupTestComponent },
            { path: 'appointmentscheduling', component: AppointmentSchedulingComponent }

        ]
    }
]);


// export const routing: ModuleWithProviders = RouterModule.forChild([

//   { path: 'patient/registration', component: PatientComponent}

// ]);

