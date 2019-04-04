import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payrollsetup-master',
  templateUrl: './payrollsetup-master.component.html',
  styleUrls: ['./payrollsetup-master.component.css']
})
export class PayrollsetupMasterComponent implements OnInit {

  tabs: string[] = [ 
  'Allowance/Deduction',  'Allowance Calculation Type',  'Benefit',  'Payroll Type', 'Payroll Year', 'Salary Calculation Type', 'Salary Structure'];
 selectedTab = this.tabs[0];

  constructor() { }

  ngOnInit() {
  }

}
