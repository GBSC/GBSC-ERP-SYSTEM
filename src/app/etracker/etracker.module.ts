import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocatorComponent } from './locator/locator.component';
import { ETrackerRoutingModule } from './etracker.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import {DxSelectBoxModule} from 'devextreme-angular/ui/select-box'
import { RootComponent } from './root/root.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SalesusersComponent } from './salesusers/salesusers.component';
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
import { CityComponent } from './territories/city/city.component';
import { ShopCensusSummaryComponent } from './reports/shop-census-summary/shop-census-summary.component';
import { ShopCensusDetailComponent } from './reports/shop-census-detail/shop-census-detail.component';
import { ShopStatusSummaryComponent } from './reports/shop-status-summary/shop-status-summary.component';
import { ShopStatusDetailComponent } from './reports/shop-status-detail/shop-status-detail.component';
import { VisitDetailComponent } from './reports/visit-detail/visit-detail.component';
import { LocationReportComponent } from './reports/location-report/location-report.component';
import { ProductDiffUnitsComponent } from './reports/product-diff-units/product-diff-units.component';
import { VisitSummaryReportComponent } from './reports/visit-summary-report/visit-summary-report.component';
import { NonProductiveReasonComponent } from './Setup/non-productive-reason/non-productive-reason.component';
import { AgmCoreModule } from '@agm/core';
import { Select2Module } from 'ng2-select2';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { DxDateBoxModule } from 'devextreme-angular/ui/date-box';
import { DxPopupModule } from 'devextreme-angular/ui/popup';


@NgModule({
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyA3NAuCASr2T0ClhN7SK1xNo9wPrG8XIuU'
        }),
        AgmSnazzyInfoWindowModule,
        CommonModule,
        Select2Module,
        ETrackerRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DxButtonModule,
        DxDataGridModule,
        DxSelectBoxModule,
        DxDateBoxModule,
        DxPopupModule
    ],
    declarations: [RootComponent, MenuComponent, LocatorComponent, SalesusersComponent, StoresComponent, StoresProfileComponent, VisitSummaryComponent, OrderTakingComponent, TerritoryComponent, RegionComponent, AreaComponent, SectionComponent, SubsectionComponent, DistributersComponent, TerritoryMasterComponent, CityComponent, ShopCensusSummaryComponent, ShopCensusDetailComponent, ShopStatusSummaryComponent, ShopStatusDetailComponent, VisitDetailComponent, LocationReportComponent, ProductDiffUnitsComponent, VisitSummaryReportComponent, NonProductiveReasonComponent],
    providers: [eTrackerUserService]
})
export class EtrackerModule { }
