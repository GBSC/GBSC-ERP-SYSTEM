import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { CompanyComponent } from '../setup/company/company.component';
import { DepartmentComponent } from '../setup/department/department.component';
import { BranchComponent } from '../setup/branch/branch.component';
import { RoleComponent } from '../setup/role/role.component';
import { FeatureComponent } from '../setup/feature/feature.component';
import { ModuleComponent } from '../setup/module/module.component';




export const routing: ModuleWithProviders = RouterModule.forChild([



    {
        path: 'setup',
        component: RootComponent,

        children: [

            { path: 'company', component: CompanyComponent },
            { path: 'department', component: DepartmentComponent },
            { path: 'branch', component: BranchComponent },
            { path: 'feature', component: FeatureComponent },
            { path: 'module', component: ModuleComponent },
            { path: 'role', component: RoleComponent }

        ]
    }

]);
