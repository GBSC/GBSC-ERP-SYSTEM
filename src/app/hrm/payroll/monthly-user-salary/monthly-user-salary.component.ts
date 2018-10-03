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
  monthlyUserSalary: any;

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

    // await this.payrollservice.month();
    // this.monthlyUserSalary = this.payrollservice.stopsalary;

    await this.payrollservice.getstopsalaries();
    this.stopSalary = this.payrollservice.stopsalary;

    await this.Employeeservice.GetAllEmployees();
    let employee = this.Employeeservice.employeereg;
    
    await this.payrollsetupservice.getusersalaries();
    let userSalary = this.payrollsetupservice.usersalary;

    await this.payrollsetupservice.getpfpayments();
    let pfPayment = this.payrollsetupservice.pfpayment;

    await this.payrollsetupservice.getpayrolls();
    let payRoll = this.payrollsetupservice.payroll;

  }

  async RosterAttendance(value) {
    let data = value.data;
    this.rosterAttendance.push(data);
    console.log(this.rosterAttendance);
  }

  async addMonthlySalary(value) {
    console.log(value);
    let monthlySalary = new MonthlyUserSalary();
    monthlySalary = { ...monthlySalary, ...value };
    console.log(this.rosterAttendance);
    monthlySalary.UserRosterAttendances = this.rosterAttendance;
    console.log(monthlySalary);
    let x = await this.payrollservice.addMonthlySalary(monthlySalary);
    console.log(x);
    this.MonthlyUserSalaryForm.reset();

  }

}
