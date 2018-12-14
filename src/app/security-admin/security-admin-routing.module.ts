import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { CompanyComponent } from './company/company.component';
import { BranchComponent } from './branch/branch.component';
import { DepartmentComponent } from './department/department.component';
import { RolesandprivilegesComponent } from './rolesandprivileges/rolesandprivileges.component';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { AuthGuardService } from '../core';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {
    path: '', component: RootComponent, 
    canActivate: [AuthGuardService],
    children: [
      { path: 'country', component: CountryComponent },
      { path: 'city', component: CityComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'branch', component: BranchComponent },
      { path: 'department', component: DepartmentComponent },
      { path: 'rolesandprivileges', component: RolesandprivilegesComponent },
      { path: 'user-registration', component: UserregistrationComponent },
      { path: 'user-registration/:id', component: UserregistrationComponent },
      { path: 'users', component: UsersComponent }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecurityRoutingModule { }
