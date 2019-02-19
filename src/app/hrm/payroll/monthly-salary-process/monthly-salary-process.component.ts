import { Component, OnInit } from '@angular/core';
import { PayrollService, PayrollSetupService } from '../../../core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-monthly-salary-process',
  templateUrl: './monthly-salary-process.component.html',
  styleUrls: ['./monthly-salary-process.component.css']
})
export class MonthlySalaryProcessComponent implements OnInit {

  public SalaryProcessForm: FormGroup;
  public payrollYears: any;
  public Records: any;
  public usersalary: any;
  public addUserSalary: any;
  public masterPayrolls: any;
  public payrollProcess: any;

  constructor(public payrollService: PayrollService, public toastr: ToastrService, public payrollSetupService: PayrollSetupService, public fb: FormBuilder) {

    this.SalaryProcessForm = this.fb.group({
      UserId: [],
      PayrollYearId: [],
      Salary: [],
      SalaryMonth: [],
      SalaryYear: [],
      SalaryDate: [],
      UserMonthlyProcesses: this.fb.array([])
    })

  }

  ngOnInit() {

    this.payrollService.getUserSalaries().subscribe(resp => {
      this.usersalary = resp;
      console.log(this.usersalary);
    })

    this.payrollSetupService.getMasterPayrolls().subscribe(resp => {
      this.masterPayrolls = resp;
      console.log(this.payrollYears);
    })

    this.payrollSetupService.getPayrollYears().subscribe(resp => {
      this.payrollYears = resp;
      console.log(this.payrollYears);
    })
  }

  formatDate(date: Date) {
    return (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear();
  }

  onProcess(date, value) {
    console.log(value);
    // console.log(this.MonthYearformat(new Date(Date.now())))
    // console.log(this.MonthYearformat(new Date(value));
    console.log(this.MonthYearformat(new Date(value)));

    let d;
    this.payrollService.getMonthlyRecord(value).subscribe(resp => {
      this.payrollProcess = resp;

      this.payrollYears = this.payrollYears.find(f=> {
        console.log(f.from);
        console.log(value)
        this.MonthYearformat(new Date(f.from)) == value

      } )
      console.log(this.payrollYears);
      
      let salaryMonth = +value.split("-")[1]
      let salaryYear = +value.split("-")[0]
      d = {
        // salary:,
        ProcessDate: new Date(Date.now()),
        salaryMonth: salaryMonth,
        salaryYear: salaryYear,
        salaryDate: date.SalaryDate,
        UserMonthlyProcesses: this.payrollProcess
      }
      console.log(d);
      if (d.UserMonthlyProcesses.length) {
        this.payrollService.addUserSalary(d).subscribe(resp => {
          this.addUserSalary = resp;
          console.log(d);
          console.log(this.addUserSalary);
          console.log(value);
        })
      } else {
        this.toastr.info("Invalid! Payroll Not Process")
      }

    })


  }

  
  MonthYearformat(date: Date) {
    return date.getFullYear() + "-" +  (date.getMonth() + 1);
  }

}
