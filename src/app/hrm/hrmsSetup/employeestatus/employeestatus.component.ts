import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { SetupService } from '../../../core';
@Component({
    selector: 'app-employeestatus',
    templateUrl: './employeestatus.component.html',
    styleUrls: ['./employeestatus.component.css']
})
export class EmployeeStatuscomponent implements OnInit {

    public empstatus: any;
    public modelUpdating: any;

    constructor(public httpClient: HttpClient, public dataService: SetupService) { }



    async ngOnInit() {
        this.empstatus = await this.dataService.getEmployeeStatus();
    }


    async addNewempstatus(empstatus) {
        await this.dataService.addEmployeeStatus(empstatus.data);
        this.empstatus = await this.dataService.getEmployeeStatus();
    }

    EditingEmpstatus(value) {
        this.modelUpdating = { ...value.oldData, ...value.newData };
    }

    async EmpstatusEdit() {
        await this.dataService.updateEmployeeStatus(this.modelUpdating);
    }

    async deleteestatus(empstats) {
        await this.dataService.DeleteEmployeeStatus(empstats.key);
    }

}