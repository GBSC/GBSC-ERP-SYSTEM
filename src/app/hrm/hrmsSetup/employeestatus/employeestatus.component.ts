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
        console.log(this.empstatus);

        // this.dataService.getAllEmployeeStatus().subscribe((data)=>this.employeestatus=data);
    }



    // GetAllCountries(){
    //   this.dashboardService.getAllContries()
    //   .subscribe((result : Country) => {
    //      this.countries = result
    //   },
    //   error => {
    //     console.log(error);
    //     //this.notificationService.printErrorMessage(error);
    //   });
    // }

    // If you don't need a filter or a pagination this can be simplified, you just use code from else block

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