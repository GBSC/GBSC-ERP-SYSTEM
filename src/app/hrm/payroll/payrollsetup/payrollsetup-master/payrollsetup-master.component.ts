import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payrollsetup-master',
  templateUrl: './payrollsetup-master.component.html',
  styleUrls: ['./payrollsetup-master.component.css']
})
export class PayrollsetupMasterComponent implements OnInit {

  tabs: string[] = ['Allowance Arrear', 'Allowance/Deduction', 'Allowance Rate',
  'Allowance Calculation Type', 'Bank Advice Template', 'Benefit', 'Cheque Template', 'Compensation Transaction','Currency',
   'Frequency', 'Fund Setup', 'Gratuity Type', 'Gratuity Slab','Gratuity-Slab-Gratuity', 
   'Leaving Reason', 'Payroll Type', 'Payroll Year', 'Payroll Bank', 'Master Payroll', 'PF Payment',
    'Salary Structure', 'Salary Calculation Type'];
 selectedTab = this.tabs[0];

  constructor() { }

  ngOnInit() {
  }

}
