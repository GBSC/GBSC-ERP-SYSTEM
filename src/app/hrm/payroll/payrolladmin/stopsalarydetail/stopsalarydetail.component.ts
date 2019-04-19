import { Component, OnInit } from '@angular/core';
import { PayrollService, PayrollSetupService, EmployeeService } from '../../../../core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stopsalarydetail',
  templateUrl: './stopsalarydetail.component.html',
  styleUrls: ['./stopsalarydetail.component.css']
})
export class StopsalarydetailComponent implements OnInit {

  public PayrollType: any;
  public employee: any;
  public StopSalary: any;

  constructor(public empservice: EmployeeService, public activatedRoute: ActivatedRoute, public router: Router, public payrollservice: PayrollService, public payrollsetupservice: PayrollSetupService) { }

  async ngOnInit() {
    this.StopSalary = await this.payrollservice.getStopSalaries();

    this.employee = await this.empservice.GetAllEmployees();

    this.PayrollType = await this.payrollsetupservice.getPayrollTypes();
  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift(
      {
        location: 'after',
        widget: 'dxButton',
        options: {
          icon: 'add',
          onClick: this.addStopSalary.bind(this)
        }
      });
  }
  
  contentReady(e) {
    if (!e.component.getSelectedRowKeys().length)
      e.component.selectRowsByIndexes(-1);
  }

  public dataToUpdate: any = null;

  selectionChanged(e) {
    e.component.collapseAll(-0);
    e.component.expandRow(e.currentSelectedRowKeys[0]);
   }

  addStopSalary() {
    this.router.navigate(['/hrm/payroll/payrolladmin/stopsalary']);
  }

}
