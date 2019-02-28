import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { AuthGuardService } from '../core';
import { LocatorComponent } from './locator/locator.component';
import { SalesusersComponent } from './salesusers/salesusers.component';
import { StoresComponent } from './stores/stores.component';
import { StoresProfileComponent } from './stores-profile/stores-profile.component';
import { VisitSummaryComponent } from './visit-summary/visit-summary.component';
import { OrderTakingComponent } from './order-taking/order-taking.component';
import { AreaComponent } from './territories/area/area.component';
import { RegionComponent } from './territories/region/region.component';
import { SectionComponent } from './territories/section/section.component';
import { SubsectionComponent } from './territories/subsection/subsection.component';
import { DistributersComponent } from './territories/distributers/distributers.component';
import { TerritoryComponent } from './territories/territory/territory.component';
import { TerritoryMasterComponent } from './territories/territory-master/territory-master.component';
import { LocationReportComponent } from './reports/location-report/location-report.component';
import { ProductDiffUnitsComponent } from './reports/product-diff-units/product-diff-units.component';
import { ShopCensusDetailComponent } from './reports/shop-census-detail/shop-census-detail.component';
import { ShopCensusSummaryComponent } from './reports/shop-census-summary/shop-census-summary.component';
import { ShopStatusDetailComponent } from './reports/shop-status-detail/shop-status-detail.component';
import { ShopStatusSummaryComponent } from './reports/shop-status-summary/shop-status-summary.component';
import { VisitDetailComponent } from './reports/visit-detail/visit-detail.component';
import { VisitSummaryReportComponent } from './reports/visit-summary-report/visit-summary-report.component';
import { NonProductiveReasonComponent } from './Setup/non-productive-reason/non-productive-reason.component';
import { TestReportComponent } from "./reports/test-report/test-report.component";


const routes: Routes = [
    {
        path: '', component: RootComponent,
        canActivate: [AuthGuardService],
        children: [
            { path: 'locator', component: LocatorComponent },
            { path: 'users', component: SalesusersComponent },
            { path: 'stores', component: StoresComponent },
            { path: 'store-profile/:id', component: StoresProfileComponent },
            { path: 'visit-summary/:id', component: VisitSummaryComponent },
            { path: 'area', component: AreaComponent },
            { path: 'region', component: RegionComponent },
            { path: 'section', component: SectionComponent },
            { path: 'subsection', component: SubsectionComponent },
            { path: 'territory-management', component: TerritoryMasterComponent },
            { path: 'distributers', component: DistributersComponent },
            { path: 'order-taking', component: OrderTakingComponent },
            { path: 'reasons', component: NonProductiveReasonComponent },
            {
                path: "reports",
                children: [
                    { path: 'location-report', component: LocationReportComponent },
                    { path: 'product-diff-units', component: ProductDiffUnitsComponent },
                    { path: 'shop-census-detail', component: ShopCensusDetailComponent },
                    { path: 'shop-census-summary', component: ShopCensusSummaryComponent },
                    { path: 'shop-status-detail', component: ShopStatusDetailComponent },
                    { path: 'shop-status-summary', component: ShopStatusSummaryComponent },
                    { path: 'visit-detail', component: VisitDetailComponent },
                    { path: 'visit-summary', component: VisitSummaryReportComponent },
                    { path: 'testrepo', component: TestReportComponent}
                ]
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ETrackerRoutingModule { }
