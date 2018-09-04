import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { DailyProcedureComponent } from './daily-procedure/daily-procedure.component';
import { FileRecordComponent } from './file-record/file-record.component';
import { ProceduresortestComponent } from './proceduresortest/proceduresortest.component';
import { ModuleGuardService } from '../../account/auth/module-guard.service';
import { AuthGuardService } from '../../account/auth/auth-guard.service';

export const routing: ModuleWithProviders = RouterModule.forChild([



    {
        path: 'lab',
        component: RootComponent,
        canActivate: [AuthGuardService, ModuleGuardService],
        children: [

            { path: 'dailyProcedure', component: DailyProcedureComponent },
            { path: 'fileRecord', component: FileRecordComponent },
            { path: 'Proceduresortest', component: ProceduresortestComponent }

        ]
    }

]);