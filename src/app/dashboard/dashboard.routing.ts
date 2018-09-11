import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { AuthGuardService } from '../account/auth/auth-guard.service';
=======
>>>>>>> 101e24f1c0723e12b4993caf674e3b62e636c45a



export const routing: ModuleWithProviders = RouterModule.forChild([
    {

        path: 'employee',
        component: RootComponent,
        children: [
            {
                path: 'dashboard', component: DashboardComponent
            }
        ]
    }
])


