import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './lab.routing';
import { RootComponent } from './root/root.component';
import { DailyProcedureComponent } from '../lab/daily-procedure/daily-procedure.component';
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
import { EmbryologyComponent } from './embryology/embryology.component';
import { InsemenationComponent } from './insemenation/insemenation.component';
import { EmbryoFreezeComponent } from './embryo-freeze/embryo-freeze.component';
import { EmbryologyThawingComponent } from './embryology-thawing/embryology-thawing.component';
import { FreezepreparationComponent } from './freezepreparation/freezepreparation.component';
import { ClinicalrecordsComponent } from './clinicalrecords/clinicalrecords.component';
import { SemenanalysisComponent } from './semenanalysis/semenanalysis.component';
import { BiochemistryOutsiderComponent } from './biochemistry-outsider/biochemistry-outsider.component';
import { TvopuRecordsComponent } from './tvopu-records/tvopu-records.component';
import { BiopsyRecordsComponent } from './biopsy-records/biopsy-records.component';
import { BiochemistryOntreatmentRecordsComponent } from './biochemistry-ontreatment-records/biochemistry-ontreatment-records.component';
import { EmbryologyRecordsComponent } from './embryology-records/embryology-records.component';
import { InsemenationRecordsComponent } from './insemenation-records/insemenation-records.component';
import { FreezePrepRecordsComponent } from './freeze-prep-records/freeze-prep-records.component';
import { EmbryologyThawingRecordsComponent } from './embryology-thawing-records/embryology-thawing-records.component';
import { InsemenationPrepRecordsComponent } from './insemenation-prep-records/insemenation-prep-records.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BiochemistryOntreatmentReportviewerComponent } from './report-components/biochemistry-ontreatment-reportviewer/biochemistry-ontreatment-reportviewer.component';
import { SemenAnalysisOutsiderReportviewerComponent } from './report-components/semen-analysis-outsider-reportviewer/semen-analysis-outsider-reportviewer.component';
import { BiochemistryDetailsOntreatmentReportviewerComponent } from './report-components/biochemistry-details-ontreatment-reportviewer/biochemistry-details-ontreatment-reportviewer.component';
import { BiochemistryOutsiderReportviewerComponent } from './report-components/biochemistry-outsider-reportviewer/biochemistry-outsider-reportviewer.component';
import { LabsummaryReportviewerComponent } from './report-components/labsummary-reportviewer/labsummary-reportviewer.component';
import { BiopsyReportviewerComponent } from './report-components/biopsy-reportviewer/biopsy-reportviewer.component';
import { InternalRequisitionRequestComponent } from './internal-requisition-request/internal-requisition-request.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DxButtonModule,
        DevExtremeModule,
        DxDataGridModule,
        CKEditorModule,
        routing,

    ],
    declarations: [

        RootComponent,
        DailyProcedureComponent,
        FileRecordComponent,
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
        ProtocolComponent,
        EmbryologyComponent,
        InsemenationComponent,
        EmbryoFreezeComponent,
        EmbryologyThawingComponent,
        FreezepreparationComponent,
        ClinicalrecordsComponent,
        SemenanalysisComponent,
        BiochemistryOutsiderComponent,
        TvopuRecordsComponent,
        BiopsyRecordsComponent,
        BiochemistryOntreatmentRecordsComponent,
        EmbryologyRecordsComponent,
        InsemenationRecordsComponent,
        FreezePrepRecordsComponent,
        EmbryologyThawingRecordsComponent,
        InsemenationPrepRecordsComponent,
        BiochemistryOntreatmentReportviewerComponent,
        SemenAnalysisOutsiderReportviewerComponent,
        BiochemistryDetailsOntreatmentReportviewerComponent,
        BiochemistryOutsiderReportviewerComponent,
        LabsummaryReportviewerComponent,
        BiopsyReportviewerComponent,
        InternalRequisitionRequestComponent,
    ]
})
export class LabModule { }
