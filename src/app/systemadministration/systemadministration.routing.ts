import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { RolesandprivilegesComponent } from '../systemadministration/rolesandprivileges/rolesandprivileges.component';
import { BranchComponent } from '../systemadministration/branch/branch.component';
import { CompanyComponent } from '../systemadministration/company/company.component';
import { DepartmentComponent } from '../systemadministration/department/department.component';
import { FeatureComponent } from '../systemadministration/feature/feature.component';
import { ModuleComponent } from '../systemadministration/module/module.component';
import { RoleComponent } from '../systemadministration/role/role.component';
import { AuthGuardService } from '../account/auth/auth-guard.service';
import { ModuleGuardService } from '../account/auth/module-guard.service';



export const routing: ModuleWithProviders = RouterModule.forChild([

    {
        path: 'systemadministration',
        component: RootComponent,
        canActivate: [AuthGuardService, ModuleGuardService],
        children: [

            { path: 'rolesandprivileges', component: RolesandprivilegesComponent },
            { path: 'branch', component: BranchComponent },
            { path: 'company', component: CompanyComponent },
            { path: 'department', component: DepartmentComponent },
            { path: 'feature', component: FeatureComponent },
            { path: 'module', component: ModuleComponent },
            { path: 'role', component: RoleComponent },


        ]
    }

]);