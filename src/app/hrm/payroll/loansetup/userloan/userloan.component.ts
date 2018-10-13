import { Component, OnInit } from '@angular/core';
import { PayrollSetupService, EmployeeService } from '../../../../core';

@Component({
    selector: 'app-userloan',
    templateUrl: './userloan.component.html',
    styleUrls: ['./userloan.component.scss']
})
export class UserloanComponent implements OnInit {

    public UserLoan: any;
<<<<<<< HEAD
=======
    public users: any;
    public loanType: any;
>>>>>>> master
    public Updateloan: any;

    constructor(public payrollsetupservice: PayrollSetupService, public employeeservice: EmployeeService) { }

    async ngOnInit() {
<<<<<<< HEAD
        await this.payrollsetupservice.getuserloans();
        this.UserLoan = this.payrollsetupservice.userloan;

        await this.payrollsetupservice.getloantypes();
        let Loantype = this.payrollsetupservice.loantype;


        await this.employeeservice.GetAllEmployees();
        let employee = this.employeeservice.employeereg;
    }

    async addUserLoan(value) {
        await this.payrollsetupservice.adduserloan(value.data);
    }

    Updatingloan(value) {
        this.Updateloan = { ...value.oldData, ...value.newData };
    }

    async updateUserLoan() {
        await this.payrollsetupservice.updateuserloan(this.Updateloan);
    }

    async deleteUserLoan(value) {
        await this.payrollsetupservice.Deleteuserloan(value.key);
=======
        this.UserLoan = await this.payrollsetupservice.getUserLoans();

        this.loanType = await this.payrollsetupservice.getLoanTypes();

        this.users = await this.employeeservice.GetAllEmployees();
    }

    async addUserLoan(value) {
        await this.payrollsetupservice.addUserLoan(value.data);
    }

    Updatingloan(value) {
        this.Updateloan = { ...value.oldData, ...value.newData };
    }

    async updateUserLoan() {
        await this.payrollsetupservice.updateUserLoan(this.Updateloan);
    }

    async deleteUserLoan(value) {
        await this.payrollsetupservice.deleteUserLoan(value.key);
>>>>>>> master
    }
}