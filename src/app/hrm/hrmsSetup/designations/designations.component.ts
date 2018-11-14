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
    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }


    async ngOnInit() {
        this.designatn = await this.dataService.getAllDesignations();
    }


    addDesignation(desg) {

        this.dataService.addDesignation(desg.data);
    }

    EditDesignation(desig) {

        this.dataService.updateDesignation(desig);
    }


    deleteDesignation(dsg) {

        this.dataService.DeleteDesignation(dsg.key);
    }
}
