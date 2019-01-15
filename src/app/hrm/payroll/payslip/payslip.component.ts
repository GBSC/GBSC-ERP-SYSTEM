import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PayrollService, EmployeeService, PayrollSetupService } from '../../../core';
import { UserLoanPayslip } from '../../../core/Models/HRM/userLoanPayslip';
import { PaySlip } from '../../../core/Models/HRM/payslip';

@Component({
    selector: 'app-payslip',
    templateUrl: './payslip.component.html',
    styleUrls: ['./payslip.component.scss']
})
export class PayslipComponent implements OnInit {

    public PayslipForm: any;
    public PaySlip;
    public userloan: UserLoanPayslip[];
    public currentUserLoan = [];
    public userLoanId = {};
    public Updateloan: any;
    public monthlySalary: any;
    public users: any;
    public userLoans: any;

    constructor(public fb: FormBuilder, public payrollservice: PayrollService,
        public Employeeservice: EmployeeService, public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.userloan = [];

        this.PayslipForm = this.fb.group({
            From: ['', Validators],
            Till: ['', Validators],
            PaymentDate: ['', Validators],
            Hours: ['', Validators],
            Days: ['', Validators],
            GrossAmount: ['', Validators],
            TaxAmount: ['', Validators],
            PfDeductionAmount: ['', Validators],
            LoanDeductionAmount: ['', Validators],
            NetAmount: ['', Validators],
            MonthlyUserSalaryId: ['', Validators],
            UserId: ['', Validators]
        });

        this.PaySlip = await this.payrollservice.getPayslips();

        this.monthlySalary = await this.payrollservice.getMonthlySalaries();

        this.userLoans = await this.payrollsetupservice.getUserLoans();

        this.users = await this.Employeeservice.GetAllEmployees();
    }

    async userLoan(value) {
        let data = value.data;
        this.userloan.push(data);
    }

    async addPayslip(value) {

        let pushloanslip = new PaySlip();
        pushloanslip = { ...pushloanslip, ...value };
        pushloanslip.UserLoanPayslips = this.userloan;
        pushloanslip.UserLoanPayslips = this.currentUserLoan;
        let x = await this.payrollservice.addPayslip(pushloanslip);
        this.PayslipForm.reset();
    }

    GetUserloan(value) {
        this.currentUserLoan = this.userLoans.filter(ul => ul.userId == value)     
    }

    Updatingloan(value) {
        this.Updateloan = { ...value.oldData, ...value.newData };
    }

    async updateUserLoan() {
        await this.payrollsetupservice.updateUserLoan(this.Updateloan);
    }

}
