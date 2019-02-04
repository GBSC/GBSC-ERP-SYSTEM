import { Component, OnInit } from '@angular/core';
import { PayrollService } from '../../../core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-monthly-salary-process',
  templateUrl: './monthly-salary-process.component.html',
  styleUrls: ['./monthly-salary-process.component.css']
})
export class MonthlySalaryProcessComponent implements OnInit {

  public SalaryProcessForm : FormGroup;
  public payrollProcess : any;

  constructor(public payrollService: PayrollService, public fb:FormBuilder) {

    this.SalaryProcessForm = this.fb.group({

      PayrollYearId : [''],
      SalaryMonth : ['']
    })

   }

  ngOnInit() {

      this.payrollService.getSalaryProcess().subscribe(resp => {
        this.payrollProcess = resp;
       console.log(this.payrollProcess);
     })
     
    }
}
