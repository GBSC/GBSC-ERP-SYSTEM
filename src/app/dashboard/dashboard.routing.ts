import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from '../core';
 


export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'employee',
        component: RootComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'dashboard', component : DashboardComponent }
        ]
    }
])


