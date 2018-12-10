import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { SetupService } from '../../../core';

@Component({
    selector: 'app-designations',
    templateUrl: './designations.component.html',
    styleUrls: ['./designations.component.css']
})
export class DesignationComponent implements OnInit {


    public designatn: any;
    public updatingModel: any;
    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }


    async ngOnInit() {
        this.designatn = await this.dataService.getAllDesignations();
    }


    async addDesignation(desg) {

        await this.dataService.addDesignation(desg.data);
        this.designatn = await this.dataService.getAllDesignations();
    }

    EditingDesignation(value) {

        this.updatingModel = {...value.oldData, ...value.newData};
    }

    async EditDesignation() {

        await this.dataService.updateDesignation(this.updatingModel);
    }
 
    async deleteDesignation(dsg) {

        await this.dataService.DeleteDesignation(dsg.key);
    }
}
