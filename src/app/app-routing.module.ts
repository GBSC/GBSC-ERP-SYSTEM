import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientModule } from '../app/hims/patient/patient.module'
import { InventorysystemModule } from '../app/Inventorysystem/Inventorysystem.module';
import { AccountModule } from '../app/account/account.module';
import { FinanceModule } from '../app/finance/finance.module';
import { LabModule } from '../app/hims/lab/lab.module'




const routes: Routes = [
    { path: 'login', loadChildren: '' },
    { path: '', redirectTo: 'index', pathMatch: 'full' }
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
