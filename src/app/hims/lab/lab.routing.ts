import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { DailyProcedureComponent } from './daily-procedure/daily-procedure.component';
import { FileRecordComponent } from './file-record/file-record.component';
import { ProceduresortestComponent } from './proceduresortest/proceduresortest.component';

export const routing: ModuleWithProviders = RouterModule.forChild([



    {
        path: 'lab',
        component: RootComponent,

        children: [

            { path: 'dailyProcedure', component: DailyProcedureComponent },
            { path: 'fileRecord', component: FileRecordComponent },
            { path: 'Proceduresortest', component: ProceduresortestComponent }

        ]
    }

]);