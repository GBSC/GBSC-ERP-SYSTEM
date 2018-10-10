import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, SetupService, EmployeeService } from '../../../../core';

@Component({
    selector: 'app-usersalary',
    templateUrl: './usersalary.component.html',
    styleUrls: ['./usersalary.component.scss']
})
export class UsersalaryComponent implements OnInit {

    public userSalary: any;
    public groups: any;
    constructor(public payrollsetupservice: PayrollSetupService, public setupservice: SetupService,
        public employeeservice: EmployeeService) { }

    async ngOnInit() {
        await this.payrollsetupservice.getusersalaries();
        this.userSalary = this.payrollsetupservice.usersalary;

        await this.payrollsetupservice.getincometaxrules();
        let incometaxRule = this.payrollsetupservice.incometaxrule;

        this.groups = await this.setupservice.getAllGroups();

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