import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PayrollService, EmployeeService, PayrollSetupService } from '../../../core';
import { UserRosterAttendance } from '../../../core/Models/HRM/userRosterAttendance';
import { MonthlyUserSalary } from '../../../core/Models/HRM/monthlyUserSalary';

@Component({
    selector: 'app-monthly-user-salary',
    templateUrl: './monthly-user-salary.component.html',
    styleUrls: ['./monthly-user-salary.component.scss']
})
export class MonthlyUserSalaryComponent implements OnInit {

    private MonthlyUserSalaryForm: any
    private rosterAttendance: UserRosterAttendance[];
    public stopSalary: any;
    public paySlip: any;
    public employees: any;
    public userSalary: any;
    public monthlyUserSalary: any;
    public pfPayment: any;
    public payroll: any;

    constructor(private fb: FormBuilder, public payrollservice: PayrollService,
        public Employeeservice: EmployeeService, public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.rosterAttendance = [];

        this.MonthlyUserSalaryForm = this.fb.group({
            MonthStartDate: ['', Validators],
            MonthEndDate: ['', Validators],
            TotalWorkingDaysInMonth: ['', Validators],
            PresentDays: ['', Validators],
            LeaveDays: ['', Validators],
            AbsentDays: ['', Validators],
            OvertimeHours: ['', Validators],
            IsStopped: ['', Validators],
            StopFrom: ['', Validators],
            StopTill: ['', Validators],
            StopSalaryId: ['', Validators],
            UserSalaryId: ['', Validators],
            PfPaymentId: ['', Validators],
            PayslipId: ['', Validators],
            PayrollId: ['', Validators]
        });

        this.stopSalary = await this.payrollservice.getStopSalaries();

        this.employees = await this.Employeeservice.GetAllEmployees();

        this.userSalary = await this.payrollsetupservice.getUserSalaries();

        this.pfPayment = await this.payrollsetupservice.getPfPayments();

        this.payroll = await this.payrollsetupservice.getPayrolls();

        this.paySlip = await this.payrollservice.getPayslips();
    }

    async RosterAttendance(value) {
        let data = value.data;
        this.rosterAttendance.push(data);
    }

    async addMonthlySalary(value) {
        let monthlySalary = new MonthlyUserSalary();
        monthlySalary = { ...monthlySalary, ...value };
        monthlySalary.UserRosterAttendances = this.rosterAttendance;
        let x = await this.payrollservice.addMonthlySalary(monthlySalary);
        this.MonthlyUserSalaryForm.reset();
    }

}
