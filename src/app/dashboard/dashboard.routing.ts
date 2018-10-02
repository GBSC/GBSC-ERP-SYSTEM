<<<<<<< HEAD
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from '../account/auth/auth-guard.service';

=======
// import { ModuleWithProviders } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { RootComponent } from './root/root.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// <<<<<<< HEAD
// import { AuthGuardService } from '../account/auth/auth-guard.service';
 
// =======
>>>>>>> master

// >>>>>>> cbc66a0013be062a5203030c16af78b391f9f19e

<<<<<<< HEAD
export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'employee',
        component: RootComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'dashboard', component: DashboardComponent
            }
        ]
    }
])
=======

// export const routing: ModuleWithProviders = RouterModule.forChild([
//     {
//         path: 'employee',
//         component: RootComponent,
// <<<<<<< HEAD
//         canActivate: [AuthGuardService],
// =======
// >>>>>>> cbc66a0013be062a5203030c16af78b391f9f19e
//         children: [
//             {
//                 path: 'dashboard', component: DashboardComponent
//             }
//         ]
//     }
// ])
>>>>>>> master


