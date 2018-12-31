import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'security', loadChildren: './security-admin/security-admin.module#SecurityAdminModule' },
    { path: 'superadmin', loadChildren: './superadmin/superadmin.module#SuperadminModule' },
    { path: 'employee', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'login', loadChildren: './account/account.module#AccountModule' },
    { path: 'hims', loadChildren: './hims/patient/patient.module#PatientModule' },
    { path: 'lab', loadChildren: './hims/lab/lab.module#LabModule' },
    { path: 'coordination', loadChildren: './hims/coordination/coordination-routing.module#CoordinationRoutingModule' },
    { path: 'hrm', loadChildren: './hrm/hrm.module#HrmModule' },
    { path: 'inventory', loadChildren: './inventory/inventory.module#InventoryModule' },
    { path: 'pharmacy', loadChildren: './pharmacy/pharmacy.module#PharmacyModule' },
    { path: 'finance', loadChildren: './finance/finance.module#FinanceModule'},
    { path: 'etracker', loadChildren: './etracker/etracker.module#EtrackerModule' }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule { }