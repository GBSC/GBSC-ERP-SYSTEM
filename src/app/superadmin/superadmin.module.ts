import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupcompanyComponent } from './setupcompany/setupcompany.component';
import { routing } from './superadmin.routing';
import { RootComponent } from './root/root.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DevExtremeModule, DxDataGridModule } from 'devextreme-angular';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DxButtonModule,
        DevExtremeModule,
        DxDataGridModule,
        routing
    ],
    declarations: [
        RootComponent,
        SetupcompanyComponent,
        MenuComponent
    ]
})
export class SuperadminModule { }
