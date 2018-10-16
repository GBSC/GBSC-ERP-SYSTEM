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

    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }



    async ngOnInit() {

        await this.dataService.getAllEmployeeStatus();
        this.empstatus = this.dataService.employeestatus;

    }


    addNewempstatus(empstatus) {
        this.dataService.addEmployeeStatus(empstatus.data);
    }

    EmpstatusEdit(estatus) {
        this.dataService.updateEmployeeStatus(estatus);
    }

    deleteestatus(empstats) {

        this.dataService.DeleteEmployeeStatus(empstats.key);
    }

}