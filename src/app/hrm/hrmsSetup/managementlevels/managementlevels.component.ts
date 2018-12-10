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
    public modelUpdating: any;

    constructor(public httpClient: HttpClient, public dataService: SetupService) { }

    async ngOnInit() {
        this.managlevel = await this.dataService.getAllManagementlevels();
    }


   async addNewManagementLevels(mnglevel) {

        await this.dataService.addManagementLevel(mnglevel.data);
        this.managlevel = await this.dataService.getAllManagementlevels();
    }

    updatingMngLevel(value) {
        this.modelUpdating= {...value.oldData, ...value.newData};
    }

    async EditManagementLevel() {
        await this.dataService.updateManagementLevel(this.modelUpdating);
    }

    async deleteManagementLevel(mng) {
       await this.dataService.DeleteManagementLevel(mng.key);
    }
}