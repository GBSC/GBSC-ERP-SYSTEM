import { NgModule } from '@angular/core';
import { DevExtremeModule} from 'devextreme-angular/ui/all';
import {DxButtonModule} from 'devextreme-angular/ui/button';
import {DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxDateBoxModule } from 'devextreme-angular/ui/date-box';
import { DxPopupModule } from 'devextreme-angular/ui/popup';

@NgModule({
  declarations: [],
  imports: [
    DevExtremeModule,
    DxButtonModule,
    DxDataGridModule,
    DxDateBoxModule,
    DxPopupModule
  ]
})
export class SharedModule { }
