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
    public updatingModel: any;
    public emptype: any;

    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }

    async ngOnInit() {
        this.emptype = await this.dataService.getAllEmployeeTypes();
    }


    async addemptype(emptype) {
        await this.dataService.addEmployeeType(emptype.data);
        this.emptype = await this.dataService.getAllEmployeeTypes();
    }

    Updatingemptype(value) {
        this.updatingModel = { ...value.oldData, ...value.newData };
    }

    async Updateemptype() {
        await this.dataService.updateEmployeeType(this.updatingModel);
    }

    async deleteEType(emptype) {
        await this.dataService.DeleteEmployeeType(emptype.key);

    }

}