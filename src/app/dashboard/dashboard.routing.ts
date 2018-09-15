import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { AuthGuardService } from '../account/auth/auth-guard.service';
=======
>>>>>>> hrms
 


export const routing: ModuleWithProviders = RouterModule.forChild([
    {

        path: 'employee',
        component: RootComponent,
<<<<<<< HEAD
        canActivate: [AuthGuardService],
=======
>>>>>>> hrms
        children: [
            {
                path: 'dashboard', component : DashboardComponent }
        ]
    }
])


