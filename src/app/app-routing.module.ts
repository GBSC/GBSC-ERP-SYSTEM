import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'employee', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'login', loadChildren: './account/account.module#AccountModule' },
    { path: 'hims', loadChildren: './hims/patient/patient.module#PatientModule' },
    { path: 'lab', loadChildren: './hims/lab/lab.module#LabModule' },
    // { path: 'coordination', loadChildren: './hims/coordination/coordination.module#CoordinationModule' },
    { path: 'hrm', loadChildren: './hrm/hrm.module#HrmModule' },
    // { path: 'inventorysystem', loadChildren: './Inventorysystem/Inventorysystem.module#InventorySystemModule' },
    { path: 'pharmacy', loadChildren: './pharmacy/pharmacy.module#PharmacyModule' },
    
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