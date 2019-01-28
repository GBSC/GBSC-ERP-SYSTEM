import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DevExtremeModule, DxDataGridModule } from 'devextreme-angular';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { OTRouting } from './ot.routing';
import { DxDateBoxModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { RootComponent } from './root/root.component';
import { MenuComponent } from './shared/menu/menu.component';
 import { PatientCaseComponent } from './patient-case/patient-case.component';
import { PatientCaseDetailComponent } from './detail/patient-case-detail/patient-case-detail.component';
import { PatientCaseRepotComponent } from './report/patient-case-repot/patient-case-repot.component';
import { MedicineRequestComponent } from './OtSteup/medicine-request/medicine-request.component';
import { OtTerminologiesComponent } from './OtSteup/ot-terminologies/ot-terminologies.component';
import { OtProcedureComponent } from './OtSteup/ot-procedure/ot-procedure.component';
import { OtEquipmentComponent } from './OtSteup/ot-equipment/ot-equipment.component';
import { LaproscopySpComponent } from './laproscopy-sp/laproscopy-sp.component';
import { LaproscopyFsComponent } from './laproscopy-fs/laproscopy-fs.component';
import { LaproscopySpDetailComponent } from './detail/laproscopy-sp-detail/laproscopy-sp-detail.component';
import { LaproscopySpReportComponent } from './report/laproscopy-sp-report/laproscopy-sp-report.component';
import { LaproscopyFsDetailComponent } from './detail/laproscopy-fs-detail/laproscopy-fs-detail.component';
import { LaproscopyFsReportComponent } from './report/laproscopy-fs-report/laproscopy-fs-report.component';
import { HystroscopyComponent } from './hystroscopy/hystroscopy.component';
import { HystroscopyDetailComponent } from './detail/hystroscopy-detail/hystroscopy-detail.component';
//import { UltraSoundPelvisComponent } from './ultra-sound-pelvis/ultra-sound-pelvis.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DxButtonModule,
    DevExtremeModule,
    DxDataGridModule,
    CKEditorModule,
    OTRouting,
    DxDateBoxModule,
    HttpClientModule
 
],
declarations: [
  
RootComponent,
  
MenuComponent,
  
   
PatientCaseComponent,
  
   
PatientCaseDetailComponent,
  
   
PatientCaseRepotComponent,
  
   
MedicineRequestComponent,
  
   
OtTerminologiesComponent,
  
   
OtProcedureComponent,
  
   
OtEquipmentComponent,
  
   
LaproscopySpComponent,
  
   
LaproscopyFsComponent,
  
   
LaproscopySpDetailComponent,
  
   
LaproscopySpReportComponent,
  
   
LaproscopyFsDetailComponent,
  
   
LaproscopyFsReportComponent,
  
   
HystroscopyComponent,
  
   
HystroscopyDetailComponent,
  
 
],

})
export class OTModule { }
