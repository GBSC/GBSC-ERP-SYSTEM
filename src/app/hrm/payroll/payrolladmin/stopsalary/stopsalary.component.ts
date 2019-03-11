import { Component, OnInit } from '@angular/core';
import { PayrollService, PayrollSetupService, EmployeeService } from '../../../../core';

@Component({
    selector: 'app-stopsalary',
    templateUrl: './stopsalary.component.html',
    styleUrls: ['./stopsalary.component.scss']
})
export class StopsalaryComponent implements OnInit {

    // public lookupDataSource = ["Stop", "Terminate"];
    public PayrollType: any;
    public employee: any;
    public StopSalary: any;
    public updatingstopsalary: any;

    public userData: any = {};
    popupVisible = false;
    selectedRows: number[];
    public selectedUsers: any;
    prefix: string;
    selectionChangedBySelectbox: boolean;

    constructor(public empservice: EmployeeService, public payrollservice: PayrollService, public payrollsetupservice: PayrollSetupService) { }

    async ngOnInit() {

        this.StopSalary = await this.payrollservice.getStopSalaries();

        this.employee = await this.empservice.GetAllEmployees();

        this.PayrollType = await this.payrollsetupservice.getPayrollTypes();
    }

    showInfo() {
        this.popupVisible = true;
    }

    selectionChangedHandler(e) { 
        console.log(e);
        
        this.userData.UserStopSalaries = e.selectedRowsData.map(u => {
            return {
                userId: u.userId,

            };
        });
        if (!this.selectionChangedBySelectbox) {
            this.prefix = null;
        }

        this.selectionChangedBySelectbox = false;
    }

      contentReady(e) {
        if (!e.component.getSelectedRowKeys().length)
          e.component.selectRowsByIndexes(-1);
      }
    
      public dataToUpdate: any = null;
    
      selectionChanged(e) {
        e.component.collapseAll(-1);
        e.component.expandRow(e.currentSelectedRowKeys[0]);
        console.log(e);
      }

    addselecteduser() {
        this.popupVisible = false;
    }

    async addStopSalary(value) {

        this.userData = { ...this.userData, ...value.data };
        console.log(this.userData);
        await this.payrollservice.addStopSalary(this.userData);
        this.StopSalary = await this.payrollservice.getStopSalaries();
    }

    StopSalaryUpdating(value) {
        this.updatingstopsalary = { ...value.oldData, ...value.newData };
    }
    async updateStopSalary() {
        await this.payrollservice.updateStopSalary(this.updatingstopsalary);
    }

    async deleteStopSalary(value) {
        await this.payrollservice.deleteStopSalary(value.key);
    }
}