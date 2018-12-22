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
import { eTrackerUserService } from '../core';
import { RegionComponent } from './territories/region/region.component';
import { AreaComponent } from './territories/area/area.component';
import { SectionComponent } from './territories/section/section.component';
import { SubsectionComponent } from './territories/subsection/subsection.component';
import { DistributersComponent } from './territories/distributers/distributers.component';
import { TerritoryComponent } from './territories/territory/territory.component';
import { TerritoryMasterComponent } from './territories/territory-master/territory-master.component';
import { Select2Module } from 'ng2-select2';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { CityComponent } from './territories/city/city.component';

@NgModule({
    imports: [
        CommonModule,
        Select2Module,
        ETrackerRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DxButtonModule,
        DevExtremeModule,
        DxDataGridModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyA3NAuCASr2T0ClhN7SK1xNo9wPrG8XIuU'
        }),
        AgmSnazzyInfoWindowModule,
    ],
    declarations: [RootComponent, MenuComponent, LocatorComponent, SalesusersComponent, SectionmanagementComponent, StoresComponent, StoresProfileComponent, VisitSummaryComponent, OrderTakingComponent, TerritoryComponent, RegionComponent, AreaComponent, SectionComponent, SubsectionComponent, DistributersComponent, TerritoryMasterComponent, CityComponent],
    providers: [eTrackerUserService]
})
export class EtrackerModule { }
