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
import { PatientService } from '../sharedservices/patient.service';
import { ConsultantService } from '../sharedservices/consultant.service';
import { BiochemistrytestComponent } from './biochemistrytest/biochemistrytest.component';
import { TestunitComponent } from './testunit/testunit.component';
import { BioChemistryService } from './services/bio-chemistry.service';
import { ReferencerangeComponent } from './referencerange/referencerange.component';
import { EmbryologysectionComponent } from './embryologysection/embryologysection.component';


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
    ],
    providers: [PatientService, ConsultantService, BioChemistryService]
})
export class LabModule { }
