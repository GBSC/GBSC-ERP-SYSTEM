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

const routes: Routes = [
    {
        path: '', component: RootComponent,
        canActivate: [AuthGuardService],
        children: [
            { path: 'locator', component: LocatorComponent },
            { path: 'sales-users', component: SalesusersComponent },
            { path: 'section-management', component: SectionmanagementComponent },
            { path: 'stores', component: StoresComponent },
            { path: 'store-profile', component: StoresProfileComponent },
            { path: 'visit-summary', component: VisitSummaryComponent },
            { path: 'order-taking', component: OrderTakingComponent }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ETrackerRoutingModule { }
