import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { UltraSoundPelvisComponent } from './ultra-sound-pelvis/ultra-sound-pelvis.component';
import { UltraSoundPelvisDetailComponent } from './ultra-sound-pelvis-detail/ultra-sound-pelvis-detail.component';
import { FWBInintialComponent } from './fwb-inintial/fwb-inintial.component';
import { SonologistComponent } from './Setup/sonologist/sonologist.component';
import { UltraSoundPelvisReportComponent } from './reports/ultra-sound-pelvis-report/ultra-sound-pelvis-report.component';







export const ultraSoundRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'ultrasound',
         component: RootComponent,
        // canActivate: [AuthGuardService, ModuleGuardService],
        children: [

              { path: 'ultrasoundpelvis', component: UltraSoundPelvisComponent },
              { path: 'ultrasoundpelvis/:id', component: UltraSoundPelvisComponent },
              { path: 'fwbinitial', component: FWBInintialComponent },
              { path: 'ultrasoundpelvisdetail', component: UltraSoundPelvisDetailComponent },


              {
                path: 'setup',
                children: [
                    { path: 'sonologist', component: SonologistComponent }
                ]
            },
            {
                path: 'reports',
                children: [
                    { path: 'ultrasoundpelvisreport/:id/:date', component: UltraSoundPelvisReportComponent }
                ]
            }
        ]

    }

]);