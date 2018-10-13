import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SetupService } from '../../../core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-managementlevels',
    templateUrl: './managementlevels.component.html',
    styleUrls: ['./managementlevels.component.css']
})
export class ManagementLevelsComponent implements OnInit {


    public managlevel: any;
    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }



    async ngOnInit() {
        await this.dataService.getAllManagementlevels();
        this.managlevel = this.dataService.managementlevel;
    }


    addNewManagementLevels(mnglevel) {

        this.dataService.addManagementLevel(mnglevel.data);
    }

    EditManagementLevel(manglevel) {

        this.dataService.updateManagementLevel(manglevel);
    }

    deleteManagementLevel(mng) {

        this.dataService.DeleteManagementLevel(mng.key);
    }
}