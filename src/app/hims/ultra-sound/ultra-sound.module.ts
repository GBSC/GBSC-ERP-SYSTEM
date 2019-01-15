import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DevExtremeModule, DxDataGridModule } from 'devextreme-angular';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ultraSoundRouting } from './ultra-sound.routing';
import { DxDateBoxModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { RootComponent } from './root/root.component';
import { MenuComponent } from './shared/menu/menu.component';
import { UltraSoundPelvisComponent } from './ultra-sound-pelvis/ultra-sound-pelvis.component';
import { FWBInintialComponent } from './fwb-inintial/fwb-inintial.component';
import { SonologistComponent } from './Setup/sonologist/sonologist.component';
import { UltraSoundPelvisDetailComponent } from './ultra-sound-pelvis-detail/ultra-sound-pelvis-detail.component';
import { UltraSoundPelvisReportComponent } from './reports/ultra-sound-pelvis-report/ultra-sound-pelvis-report.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DxButtonModule,
    DevExtremeModule,
    DxDataGridModule,
    CKEditorModule,
    ultraSoundRouting,
    DxDateBoxModule,
    HttpClientModule
 
],
declarations: [
  
RootComponent,
  
MenuComponent,
  
UltraSoundPelvisComponent,
  
FWBInintialComponent,
  
SonologistComponent,
  
UltraSoundPelvisDetailComponent,
  
UltraSoundPelvisReportComponent
],

})
export class UltraSoundModule { }
