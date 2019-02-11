import { Component, OnInit } from '@angular/core';
import { PayrollService, PayrollSetupService } from '../../../core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-monthly-salary-process',
  templateUrl: './monthly-salary-process.component.html',
  styleUrls: ['./monthly-salary-process.component.css']
})
export class MonthlySalaryProcessComponent implements OnInit {

  public SalaryProcessForm: FormGroup;
  public payrollYears: any;
  public payrollProcess: any;

  constructor(public payrollService: PayrollService, public payrollSetupService: PayrollSetupService, public fb: FormBuilder) {

    this.SalaryProcessForm = this.fb.group({

      PayrollYearId: [''],
      SalaryMonth: ['']
    })

  }

  ngOnInit() {

    this.payrollSetupService.getPayrollYears().subscribe(resp => {
      this.payrollYears = resp;
      console.log(this.payrollYears);
    })

    this.payrollService.getSalaryProcess().subscribe(resp => {
      this.payrollProcess = resp;
      console.log(this.payrollProcess);
    })

  }
  
}
