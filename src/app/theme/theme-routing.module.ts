import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientModule } from '../../app/hims/patient/patient.module'
import { InventorysystemModule } from '../Inventorysystem/Inventorysystem.module';
import { FinanceModule } from '../finance/finance.module';
import { LabModule } from '../../app/hims/lab/lab.module'
import { DashboardModule } from '../dashboard/dashboard.module';
import { HrmModule } from '../hrm/hrm.module';
import { PharmacyModule } from '../pharmacy/pharmacy.module';
import { SuperadminModule } from '../superadmin/superadmin.module';
import { CoreModule } from '../core/core.module';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { AuthGuardService } from '../core';



const routes: Routes = [
    {
        "path": "",
        "redirectTo": "employee/dashboard",
        "pathMatch": "full",
        "canActivate": [AuthGuardService]
    },
    {
        "path": "**",
        "redirectTo": "404",
        "pathMatch": "full"
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        PharmacyModule,
        CoreModule,
        PatientModule,
        LabModule,
        FinanceModule,
        InventorysystemModule,
        SuperadminModule,
        DashboardModule,
        HrmModule,
    ],
    exports: [
        RouterModule,
    ]
})
export class ThemeRoutingModule { }
