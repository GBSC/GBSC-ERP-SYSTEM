import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { AuthGuardService } from '../core';
import { LocatorComponent } from './locator/locator.component';
import { SalesusersComponent } from './salesusers/salesusers.component';
import { SectionmanagementComponent } from './sectionmanagement/sectionmanagement.component';
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

const routes: Routes = [
    {
        path: '', component: RootComponent,
        canActivate: [AuthGuardService],
        children: [
            { path: 'locator', component: LocatorComponent },
            { path: 'sales-users', component: SalesusersComponent },
            { path: 'section-management', component: SectionmanagementComponent },
            { path: 'stores', component: StoresComponent },
            { path: 'store-profile/:id', component: StoresProfileComponent },
            { path: 'visit-summary/:id', component: VisitSummaryComponent },
            { path: 'area', component: AreaComponent },
            { path: 'region', component: RegionComponent },
            { path: 'section', component: SectionComponent },
            { path: 'subsection', component: SubsectionComponent },
            { path: 'territory-management', component: TerritoryMasterComponent },
            { path: 'territory', component: TerritoryComponent },
            { path: 'distributers', component: DistributersComponent },
            { path: 'order-taking', component: OrderTakingComponent }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ETrackerRoutingModule { }
