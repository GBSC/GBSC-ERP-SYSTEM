import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { SetupService } from '../../../core';
 


@Component({
    selector: 'app-employeetype',
    templateUrl: './employeetype.component.html',
    styleUrls: ['./employeetype.component.css']
})
export class EmployeeTypes implements OnInit {
    public emptype: any;
    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }

    async ngOnInit() {
        // this.dataService.getAllEmployeeTypes().subscribe((data)=>this.employeetype=data);
        await this.dataService.getAllEmployeeTypes();
        this.emptype = this.dataService.employeetype;
        console.log(this.emptype);
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

    addemptype(emptype) {
        this.dataService.addEmployeeType(emptype.data)
    }

    Updateemptype(emptype) {
        this.dataService.updateEmployeeType(emptype);

    }

    deleteEType(emptype) {
        this.dataService.DeleteEmployeeType(emptype.key);

    }

}