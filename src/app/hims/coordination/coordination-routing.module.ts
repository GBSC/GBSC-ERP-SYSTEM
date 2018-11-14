import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinicalrecordComponent } from './clinicalrecord/clinicalrecord.component';
import { RootComponent } from './root/root.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxDataGridModule, DevExtremeModule } from 'devextreme-angular';
import { MenuComponent } from './shared/menu/menu.component';
import { AuthGuardService } from '../../core';

const routes: Routes = [{
    path: "coordination",
    component: RootComponent,
    canActivate: [AuthGuardService],
    children: [{
        path: "clinical-record/:id",
        component: ClinicalrecordComponent
    },
    {
        path: "clinical-record",
        component: ClinicalrecordComponent
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DxButtonModule,
        DevExtremeModule,
        DxDataGridModule
    ],

    declarations: [
        RootComponent,
        MenuComponent,
        ClinicalrecordComponent
    ],
    exports: [RouterModule]
})
export class CoordinationRoutingModule { }
