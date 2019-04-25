import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, SetupService, EmployeeService, PayrollService } from '../../../../core';

@Component({
    selector: 'app-usersalary',
    templateUrl: './usersalary.component.html',
    styleUrls: ['./usersalary.component.scss']
})
export class UsersalaryComponent implements OnInit {

    public userSalary: any;
    public users: any;
    public incometaxRule: any;
    public groups: any;

    constructor(public payrollService: PayrollService, public payrollsetupservice: PayrollSetupService, public setupservice: SetupService,
        public employeeservice: EmployeeService) { }

    async ngOnInit() {

        this.userSalary = await this.payrollService.getUserSalaries();

        this.incometaxRule = await this.payrollsetupservice.getIncomeTaxRules();

        this.groups = await this.setupservice.getAllGroups();

        this.users = await this.employeeservice.GetAllEmployees();
    }

    // async addUserSalary(value) {
    //     await this.payrollsetupservice.addUserSalary(value.data);
    //     this.userSalary = await this.payrollsetupservice.getUserSalaries();
    // }

    // async updateUserSalary(value) {
    //     await this.payrollsetupservice.updateUserSalary(value);
    // }

    // async deleteUserSalary(value) {
    //     await this.payrollsetupservice.deleteUserSalary(value.key);
    // }

}