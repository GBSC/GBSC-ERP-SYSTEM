import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocatorComponent } from './locator/locator.component';
import { ETrackerRoutingModule } from './etracker.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DevExtremeModule, DxDataGridModule } from 'devextreme-angular';
import { RootComponent } from './root/root.component';
import { MenuComponent } from './shared/menu/menu.component';
import { RouterModule } from '@angular/router';
import { SalesusersComponent } from './salesusers/salesusers.component';
import { SectionmanagementComponent } from './sectionmanagement/sectionmanagement.component';
import { StoresComponent } from './stores/stores.component';
import { StoresProfileComponent } from './stores-profile/stores-profile.component';
import { VisitSummaryComponent } from './visit-summary/visit-summary.component';
import { OrderTakingComponent } from './order-taking/order-taking.component';
import { TerritoryComponent } from './territory/territory.component';

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
    declarations: [RootComponent, MenuComponent, LocatorComponent, SalesusersComponent, SectionmanagementComponent, StoresComponent, StoresProfileComponent, VisitSummaryComponent, OrderTakingComponent, TerritoryComponent]
})
export class EtrackerModule { }
