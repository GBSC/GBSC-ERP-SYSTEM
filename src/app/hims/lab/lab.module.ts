import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './lab.routing';
import { RootComponent } from './root/root.component';

import { DailyProcedureComponent } from '../lab/daily-procedure/daily-procedure.component';
import { FooterComponent } from '../lab/shared/footer/footer.component';
import { HeaderComponent } from '../lab/shared/header/header.component';
import { MenuComponent } from '../lab/shared/menu/menu.component';




import { FileRecordComponent } from './file-record/file-record.component';
import { ProceduresortestComponent } from './proceduresortest/proceduresortest.component';
import { BiochemistryontreatmentComponent } from './biochemistryontreatment/biochemistryontreatment.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        routing,

    ],
    declarations: [

        RootComponent,
        DailyProcedureComponent,
        FileRecordComponent,
        FooterComponent,
        HeaderComponent,
        MenuComponent,
        ProceduresortestComponent,
        BiochemistryontreatmentComponent,
    ],
    providers: []
})
export class LabModule { }
