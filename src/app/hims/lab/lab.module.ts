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
import { SemensanalysislistComponent } from './semensanalysislist/semensanalysislist.component';
import { DxButtonModule, DevExtremeModule, DxDataGridModule } from 'devextreme-angular';
import { BiochemistryComponent } from './biochemistry/biochemistry.component';
import { BiopsyComponent } from './biopsy/biopsy.component';
import { InseminationprepComponent } from './inseminationprep/inseminationprep.component';
import { BiochemistrytestComponent } from '../../hims/lab/labsetup/biochemistrytest/biochemistrytest.component';
import { TestunitComponent } from '../../hims/lab/labsetup/testunit/testunit.component';
import { ReferencerangeComponent } from './referencerange/referencerange.component';
import { EmbryologysectionComponent } from './embryologysection/embryologysection.component';
import { EmbryologycodesComponent } from './labsetup/embryologycodes/embryologycodes.component';
import { EmbryologistsComponent } from './labsetup/embryologists/embryologists.component';
import { TvopuComponent } from './tvopu/tvopu.component';
import { MedicineComponent } from './medicine/medicine.component';
import { TreatmenttypeComponent } from './treatmenttype/treatmenttype.component';
import { ProtocolComponent } from './protocol/protocol.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DxButtonModule,
        DevExtremeModule,
        DxDataGridModule,
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
        SemensanalysislistComponent,
        BiochemistryComponent,
        BiopsyComponent,
        InseminationprepComponent,
        BiochemistrytestComponent,
        TestunitComponent,
        ReferencerangeComponent,
        EmbryologysectionComponent,
        EmbryologycodesComponent,
        EmbryologistsComponent,
        TvopuComponent,
        MedicineComponent,
        TreatmenttypeComponent,
        ProtocolComponent
    ]
})
export class LabModule { }
