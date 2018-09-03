import { ModuleWithProviders } from '@angular/core';
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

export const routing: ModuleWithProviders = RouterModule.forChild([



    {
        path: 'lab',
        component: RootComponent,

        children: [

            { path: 'dailyProcedure', component: DailyProcedureComponent },
            { path: 'fileRecord', component: FileRecordComponent },
            { path: 'Proceduresortest', component: ProceduresortestComponent },
            { path: 'semensanalysislist', component: SemensanalysislistComponent },
            { path: 'biochemistryontreatment', component: BiochemistryontreatmentComponent },
            { path: 'biochemistry', component: BiochemistryComponent },
            { path: 'biopsy', component: BiopsyComponent },
            { path: 'inseminationprep', component: InseminationprepComponent },

        ]
    }

]);