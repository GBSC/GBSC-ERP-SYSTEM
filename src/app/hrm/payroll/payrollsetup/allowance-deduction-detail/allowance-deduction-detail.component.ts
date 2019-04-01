import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allowance-deduction-detail',
  templateUrl: './allowance-deduction-detail.component.html',
  styleUrls: ['./allowance-deduction-detail.component.css']
})
export class AllowanceDeductionDetailComponent implements OnInit {

  lookupDataSource = ["allowance", "deduction"];
  public allowancededuction: any;
  public allowanceCalculationTypes: any;
  public updatingdeduction: any;

  constructor(public payrollSetupService: PayrollSetupService, public router: Router) { }

  async ngOnInit() {

    this.payrollSetupService.getAllowanceDeductions().subscribe(rep => {
      this.allowancededuction = rep;
    });

    this.allowanceCalculationTypes = await this.payrollSetupService.getAllowanceCalculationTypes();
  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift(
      {
        location: 'after',
        widget: 'dxButton',
        options: {
          icon: 'add',
          onClick: this.addallowanceordeduction.bind(this)
        }
      });

  }
  addallowanceordeduction() {
    this.router.navigate(['/hrm/payroll/allowancededuction']);
  }

  updatingAllowanceDeduction(value) {
    this.updatingdeduction = { ...value.oldData, ...value.newData };
  }
  async updateAllowanceDeduction() {
    await this.payrollSetupService.updateAllowanceDeduction(this.updatingdeduction);
  }
    
  async deleteAllowanceDeduction(value) {
    await this.payrollSetupService.DeleteAllowanceDeduction(value.key);
}

}
