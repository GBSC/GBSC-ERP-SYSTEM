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
        this.emptype = await this.dataService.getAllEmployeeTypes();
    }


    addemptype(emptype) {
        this.dataService.addEmployeeType(emptype.data);
        this.emptype = this.dataService.getAllEmployeeTypes();
    }

    Updateemptype(emptype) {
        this.dataService.updateEmployeeType(emptype);

    }

    deleteEType(emptype) {
        this.dataService.DeleteEmployeeType(emptype.key);

    }

}