import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinicalrecordComponent } from './clinicalrecord/clinicalrecord.component';
import { RootComponent } from './root/root.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { MenuComponent } from './shared/menu/menu.component';
import { AuthGuardService } from '../../core';
import { ClinicalRecordsListComponent } from './clinical-records-list/clinical-records-list.component';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
import { DxDateBoxModule } from 'devextreme-angular/ui/date-box';
import { DxPopupModule } from 'devextreme-angular/ui/popup';

const routes: Routes = [{
    path: "",
    component: RootComponent,
    canActivate: [AuthGuardService],
    children: [{
        path: "clinical-record/:id",
        component: ClinicalrecordComponent
    },
    {
        path: "clinical-record",
        component: ClinicalrecordComponent
    },
    {
        path: "clinical-records-list",
        component: ClinicalRecordsListComponent
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DxButtonModule,
        DxDataGridModule,
        DxSelectBoxModule,
        DxDateBoxModule,
        DxPopupModule
    ],

    declarations: [
        RootComponent,
        MenuComponent,
        ClinicalrecordComponent,
        ClinicalRecordsListComponent
    ],
    exports: [RouterModule]
})
export class CoordinationRoutingModule { }
