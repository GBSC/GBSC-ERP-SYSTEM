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
  
 
],

})
export class OTModule { }
