import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { UltraSoundPelvisComponent } from './ultra-sound-pelvis/ultra-sound-pelvis.component';
import { UltraSoundPelvisDetailComponent } from './ultra-sound-pelvis-detail/ultra-sound-pelvis-detail.component';
import { FWBInintialComponent } from './fwb-inintial/fwb-inintial.component';
import { SonologistComponent } from './Setup/sonologist/sonologist.component';
import { UltraSoundPelvisReportComponent } from './reports/ultra-sound-pelvis-report/ultra-sound-pelvis-report.component';
import { FwbInitialReportComponent } from './reports/fwb-initial-report/fwb-initial-report.component';
import { FwbInitialDetailComponent } from './fwb-initial-detail/fwb-initial-detail.component';
import { UltraSoundMasterComponent } from './ultra-sound-master/ultra-sound-master.component';
import { UltraSoundMasterDetailComponent } from './ultra-sound-master-detail/ultra-sound-master-detail.component';












export const ultraSoundRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'ultrasound',
         component: RootComponent,
        // canActivate: [AuthGuardService, ModuleGuardService],
        children: [

              { path: 'ultrasoundpelvis', component: UltraSoundPelvisComponent },
              { path: 'ultrasoundpelvis/:id', component: UltraSoundPelvisComponent },
              { path: 'fwbinitial', component: FWBInintialComponent },
              { path: 'fwbinitial/:id', component: FWBInintialComponent },
              { path: 'ultrasoundpelvisdetail', component: UltraSoundPelvisDetailComponent },
              { path: 'fwbinitialdetail', component: FwbInitialDetailComponent },
              { path: 'ultrasoundmaster', component: UltraSoundMasterComponent },
              { path: 'ultrasoundmaster/:id', component: UltraSoundMasterComponent },
              { path: 'ultrasoundmasterdetail', component: UltraSoundMasterDetailComponent },


              {
                path: 'setup',
                children: [
                    { path: 'sonologist', component: SonologistComponent }
                ]
            },
            {
                path: 'reports',
                children: [ 
                    { path: 'ultrasoundpelvisreport/:id/:date', component: UltraSoundPelvisReportComponent },
                    { path: 'fwbinitialreport/:id/:date', component: FwbInitialReportComponent }
                 //   { path: 'fwbinitialreport/:id/:date', component: FwbInitialReportComponent }

                ]
            }
        ]

    }

]);