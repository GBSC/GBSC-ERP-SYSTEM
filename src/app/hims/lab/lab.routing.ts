import { ModuleWithProviders, Testability } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { DailyProcedureComponent } from './daily-procedure/daily-procedure.component';
import { FileRecordComponent } from './file-record/file-record.component';
import { ProceduresortestComponent } from './proceduresortest/proceduresortest.component';
import { SemensanalysislistComponent } from './semensanalysislist/semensanalysislist.component';
import { BiochemistryontreatmentComponent } from './biochemistryontreatment/biochemistryontreatment.component';
import { BiochemistryComponent } from './biochemistry/biochemistry.component';
import { BiopsyComponent } from './biopsy/biopsy.component';
import { InseminationprepComponent } from './inseminationprep/inseminationprep.component';
import {BiochemistrytestComponent} from  '../lab/labsetup/biochemistrytest/biochemistrytest.component';
import { ReferencerangeComponent } from './referencerange/referencerange.component';
import { EmbryologysectionComponent } from './embryologysection/embryologysection.component';
import {TestunitComponent} from '../lab/labsetup/testunit/testunit.component';

import {EmbryologistsComponent} from '../lab/labsetup/embryologists/embryologists.component'
import {EmbryologycodesComponent} from '../lab/labsetup/embryologycodes/embryologycodes.component'
import { ModuleGuardService } from '../../account/auth/module-guard.service';
import { AuthGuardService } from '../../account/auth/auth-guard.service';

export const routing: ModuleWithProviders = RouterModule.forChild([



    {
        path: 'lab',
        component: RootComponent,
        canActivate: [AuthGuardService, ModuleGuardService],
        children: [
            { path: 'testunit', component: TestunitComponent },
            { path: 'biochemistrytest', component: BiochemistrytestComponent },
            { path: 'dailyProcedure', component: DailyProcedureComponent },
            { path: 'fileRecord', component: FileRecordComponent },
            { path: 'Proceduresortest', component: ProceduresortestComponent },
            { path: 'semensanalysislist', component: SemensanalysislistComponent },
            { path: 'biochemistryontreatment', component: BiochemistryontreatmentComponent },
            { path: 'biochemistry', component: BiochemistryComponent },
            { path: 'biopsy', component: BiopsyComponent },
            { path: 'inseminationprep', component: InseminationprepComponent },
            { path: 'referencerange', component: ReferencerangeComponent },
            { path: 'embryologysection', component: EmbryologysectionComponent },
            { path: 'embryologist', component: EmbryologistsComponent },
            { path: 'embryologycode', component: EmbryologycodesComponent },

        ]
    }

]);