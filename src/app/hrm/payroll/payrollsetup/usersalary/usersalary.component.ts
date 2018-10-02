import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../services/payrollsetup.service';
import { SetupService } from '../../../hrmsSetup/services/setup.service';
import { EmployeeService } from '../../../employee/services/employee.service';

@Component({
    selector: 'app-usersalary',
    templateUrl: './usersalary.component.html',
    styleUrls: ['./usersalary.component.scss']
})
export class UsersalaryComponent implements OnInit {

    public userSalary: any;
    constructor(public payrollsetupservice: PayrollSetupService, public setupservice: SetupService,
        public employeeservice: EmployeeService) { }

    async ngOnInit() {
        await this.payrollsetupservice.getusersalaries();
        this.userSalary = this.payrollsetupservice.usersalary;

        await this.payrollsetupservice.getincometaxrules();
        let incometaxRule = this.payrollsetupservice.incometaxrule;

        await this.setupservice.getAllGroups();
        let group = this.setupservice.group;

        await this.employeeservice.GetAllEmployees();
        let user = this.employeeservice.employeereg;
    }

    async addUserSalary(value) {
        await this.payrollsetupservice.addusersalary(value.data);
    }

    async updateUserSalary(value) {
        console.log(value);
        await this.payrollsetupservice.updateusersalary(value);
    }

    async deleteUserSalary(value) {
        await this.payrollsetupservice.Deleteusersalary(value.key);
    }

}