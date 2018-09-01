import { ModuleWithProviders, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RootComponent } from '../employee/root/root.component';
import { HomeComponent } from '../employee/home/home.component';

import { BasicinformationComponent } from '../employee/basicinformation/basicinformation.component';
import { EmployeesComponent } from '../employee/employees/employees.component';
import { EmployeedetailComponent } from '../employee/employeedetail/employeedetail.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
 

    {
        path: 'hrm',
        children: [
            {
                path: 'employee', component: RootComponent,
                children: [
                    { path: '', component: EmployeesComponent },
                    { path: 'registration', component: HomeComponent },
                    { path: 'basicinformation', component: BasicinformationComponent },
                    { path: 'employees', component: EmployeesComponent },
                    { path: 'employeedetail', component: EmployeedetailComponent }
                ]
            }
        ]
    }
])