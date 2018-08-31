import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../auth/_guards/auth.guard";
import { PatientModule } from '../../app/hims/patient/patient.module'
import { InventorysystemModule } from '../Inventorysystem/Inventorysystem.module';
import { SetupModule } from '../setup/setup.module';
import { FinanceModule } from '../finance/finance.module';
import { LabModule } from '../../app/hims/lab/lab.module'
import { SystemAdministrationModule } from '../systemadministration/systemadministration.module';
import { HrmModule } from '../hrm/hrmsSetup/hrm.module';
import { EmployeeModule } from '../hrm/employee/employee.module';
<<<<<<< HEAD
import { PayrollModule } from '../payroll/payroll.module';
import { SuperadminModule } from '../superadmin/superadmin.module';
=======
import { AccountModule } from '../account/account.module';
>>>>>>> 975215233674f410f72b5abe4e7de5f1d85e897e



const routes: Routes = [
    {
        "path": "",
        "component": ThemeComponent,
        "canActivate": [AuthGuard],
        "children": [
            {
                "path": "index",
                "loadChildren": ".\/pages\/subheader--type-search\/index\/index.module#IndexModule"
            },
            {
                "path": "inner",
                "loadChildren": ".\/pages\/default\/inner\/inner.module#InnerModule"
            },
            {
                "path": "profile",
                "loadChildren": ".\/pages\/default\/profile\/profile.module#ProfileModule"
            },
            {
                "path": "404",
                "loadChildren": ".\/pages\/default\/not-found\/not-found.module#NotFoundModule"
            },
            {
                "path": "",
                "redirectTo": "index",
                "pathMatch": "full"
            }
        ]
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
        PatientModule,
        LabModule,
        FinanceModule,
        InventorysystemModule,
        SetupModule,
        SuperadminModule,
        SystemAdministrationModule,
        HrmModule,
        EmployeeModule,
<<<<<<< HEAD
        PayrollModule
=======
        AccountModule
>>>>>>> 975215233674f410f72b5abe4e7de5f1d85e897e
    ],
    exports: [
        RouterModule,
    ]
})
export class ThemeRoutingModule { }
