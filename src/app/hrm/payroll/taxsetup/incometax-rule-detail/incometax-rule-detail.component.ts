import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incometax-rule-detail',
  templateUrl: './incometax-rule-detail.component.html',
  styleUrls: ['./incometax-rule-detail.component.css']
})
export class IncometaxRuleDetailComponent implements OnInit {

  public taxRelief: any;
  public incomeTax: any;
  public payrollYears: any;
  public taxSchedule: any;
  public incomeTaxRuleId: any;

  constructor(public router: Router, public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() {

    this.taxRelief = await this.payrollsetupservice.getTaxReliefs();

    this.incomeTax = await this.payrollsetupservice.getIncomeTaxRules();

    this.payrollsetupservice.getPayrollYears().subscribe(resp => {this.payrollYears = resp; })

    this.taxSchedule = await this.payrollsetupservice.getTaxSchedules();
  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift(
      {
        location: 'after',
        widget: 'dxButton',
        options: {
          icon: 'add',
          onClick: this.addIncomeTax.bind(this)
        }
      });
  }


  contentReady(e) {
    if (!e.component.getSelectedRowKeys().length)
      e.component.selectRowsByIndexes(-1);
  }
 
  selectionChanged(e) {
    e.component.collapseAll(-1);
    e.component.expandRow(e.currentSelectedRowKeys[0]);
   }

  addIncomeTax() {
    this.router.navigate(['/hrm/payroll/incometaxrule']);
  }

  getDataById(i) {
    this.incomeTaxRuleId = i.key;
    this.router.navigate(['hrm/payroll/updateincometaxrule/' + this.incomeTaxRuleId]);
  }
}
