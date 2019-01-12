import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { UltraSoundPelvisComponent } from './ultra-sound-pelvis/ultra-sound-pelvis.component';
import { FWBInintialComponent } from './fwb-inintial/fwb-inintial.component';





export const ultraSoundRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'ultrasound',
         component: RootComponent,
        // canActivate: [AuthGuardService, ModuleGuardService],
        children: [

              { path: 'ultrasoundpelvis', component: UltraSoundPelvisComponent },
              { path: 'fwbinitial', component: FWBInintialComponent },

        ]

    }

]);