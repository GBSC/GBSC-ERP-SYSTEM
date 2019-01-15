import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupcompanyComponent } from './setupcompany/setupcompany.component';
import { routing } from './superadmin.routing';
import { RootComponent } from './root/root.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxDateBoxModule } from 'devextreme-angular/ui/date-box';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DxButtonModule,
        DxDataGridModule,
        DxDateBoxModule,
        routing
    ],
    declarations: [
        RootComponent,
        SetupcompanyComponent,
        MenuComponent
    ]
})
export class SuperadminModule { }
