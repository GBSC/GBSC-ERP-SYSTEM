import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PayrollService, EmployeeService, PayrollSetupService, AttendanceService } from '../../../core';
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
        public Employeeservice: EmployeeService, public attendanceService: AttendanceService, public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.userloan = [];

        this.PayslipForm = this.fb.group({
            From: [''],
            Till: [''],
            PaymentDate: [''],
            Hours: [''],
            Days: [''],
            GrossAmount: [''],
            TaxAmount: [''],
            PfDeductionAmount: [''],
            LoanDeductionAmount: [''],
            NetAmount: [''],
            MonthlyUserSalaryId: [''],
            UserId: ['']
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

    // leftAmount
    // sumDebit() {
    //     this.leftAmount = 0;
    //     this.attendanceService.getUserAttendancesbyIddate
    //     for (let d of control) {
    //         this.debitTotal += (+d.value.DebitAmount);
    //     }
    // }
    public employeeData: any = [];

    formatDate(date: Date) {
        return (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear();
    }
    days
    getattendancerequest(value) {
         this.PayslipForm.value.From = this.formatDate(new Date(this.PayslipForm.value.From))
        this.PayslipForm.value.Till = this.formatDate(new Date(this.PayslipForm.value.Till))
        this.attendanceService.getUserAttendancesbyIddate(value.UserId, value.From, value.Till).subscribe(res => {
            this.employeeData = res;
            console.log(this.employeeData);
            for (let d of this.employeeData.length) {
                this.days += (d.value.Days);
                console.log(d); 
            } 
            console.log(this.employeeData);
              
            // this.employeeData.forEach(element => {
            //     console.log(element.assignRosterId);
            //     this.attendanceSetupservice.getAsignRosterById(element.assignRosterId).subscribe(res => {
            //         this.employeeAsignRosters = res;
            //         console.log(this.employeeAsignRosters)
            //     })
            // });

        }) 
    }

    Updatingloan(value) {
        this.Updateloan = { ...value.oldData, ...value.newData };
    }

    async updateUserLoan() {
        await this.payrollsetupservice.updateUserLoan(this.Updateloan);
    }

}
