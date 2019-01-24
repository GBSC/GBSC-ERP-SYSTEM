import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
 import { PatientCaseComponent } from './patient-case/patient-case.component';
 import { PatientCaseDetailComponent } from './detail/patient-case-detail/patient-case-detail.component';
 
 import { PatientCaseRepotComponent } from './report/patient-case-repot/patient-case-repot.component';










export const OTRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'ot',
         component: RootComponent,
        // canActivate: [AuthGuardService, ModuleGuardService],
        children: [

               { path: 'patientcase', component: PatientCaseComponent },
               { path: 'patientcase/:id'  , component: PatientCaseComponent },

               {
                path: 'detail',
                children: [
                    { path: 'patientcasedetail', component: PatientCaseDetailComponent }
                ]
            },
            {
                path: 'report',
                children: [
                    { path: 'patientcaserepot/:id/:date', component: PatientCaseRepotComponent }
                ]
            },
        ]

    }

]);