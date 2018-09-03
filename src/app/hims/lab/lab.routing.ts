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
import { BiochemistrytestComponent } from './biochemistrytest/biochemistrytest.component';
import { ReferencerangeComponent } from './referencerange/referencerange.component';
import { TestunitComponent } from './testunit/testunit.component';
import { EmbryologysectionComponent } from './embryologysection/embryologysection.component';

export const routing: ModuleWithProviders = RouterModule.forChild([



    {
        path: 'lab',
        component: RootComponent,

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
        ]
    }

]);