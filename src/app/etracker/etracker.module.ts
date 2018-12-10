import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocatorComponent } from './locator/locator.component';
import { ETrackerRoutingModule } from './etracker.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DevExtremeModule, DxDataGridModule } from 'devextreme-angular';
import { RootComponent } from './root/root.component';
import { MenuComponent } from './shared/menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        ETrackerRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DxButtonModule,
        DevExtremeModule,
        DxDataGridModule
    ],
    declarations: [RootComponent, MenuComponent, LocatorComponent]
})
export class EtrackerModule { }
