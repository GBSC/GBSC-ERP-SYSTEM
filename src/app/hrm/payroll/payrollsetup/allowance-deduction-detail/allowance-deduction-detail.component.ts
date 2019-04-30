import { Component, OnInit } from '@angular/core';
import { PayrollSetupService } from '../../../../core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-allowance-deduction-detail',
  templateUrl: './allowance-deduction-detail.component.html',
  styleUrls: ['./allowance-deduction-detail.component.css']
})
export class AllowanceDeductionDetailComponent implements OnInit {

  lookupDataSource = ["Allowance", "Deduction"];
  public allowancededuction: any;
  public allowanceCalculationTypes: any;
  public updatingdeduction: any;

  constructor(public toaster: ToastrService, public payrollSetupService: PayrollSetupService, public router: Router) { }

  async ngOnInit() {

    this.payrollSetupService.getAllowanceDeductions().subscribe(rep => {
      this.allowancededuction = rep;
    });

  }

  addAllowanceDeduction(value) {

    this.payrollSetupService.addAllowanceDeduction(value.data).subscribe(resp => {
      console.log(resp);
      this.payrollSetupService.getAllowanceDeductions().subscribe(rs => {
        this.allowancededuction = rs;
      });
    });
    this.toaster.success("Successfully! Added");
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
