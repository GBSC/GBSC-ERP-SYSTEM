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
        await this.dataService.getAllDesignations();
        this.designatn = this.dataService.designation;
        //console.log(this.designatn);
        // this.dataService.getAllDesignations().subscribe((data)=>this.designation=data);
    }



    // If you don't need a filter or a pagination this can be simplified, you just use code from else block

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
