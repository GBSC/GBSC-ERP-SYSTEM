import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewfundsetup',
  templateUrl: './viewfundsetup.component.html',
  styleUrls: ['./viewfundsetup.component.css']
})
export class ViewfundsetupComponent implements OnInit {

  public fundSetup: any;
  public payrollYears: any;

  constructor(public router: Router, public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() {

    this.fundSetup = await this.payrollsetupservice.getFundSetups();

    this.payrollYears = await this.payrollsetupservice.getPayrollYears();

  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift(
        {
            location: 'after',
            widget: 'dxButton',
            options: {
                icon: 'add',
                onClick: this.addFundSetup.bind(this)
            }
        });
}

  addFundSetup() {
    this.router.navigate(['/hrm/payroll/fundsetup']); 
}
}
