import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing }  from './lab.routing';
import { RootComponent } from './root/root.component';

import { DailyProcedureComponent } from '../lab/daily-procedure/daily-procedure.component';



import { FileRecordComponent } from './file-record/file-record.component';


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
    FileRecordComponent
 ],
  providers:    [  ]
})
export class LabModule { }
