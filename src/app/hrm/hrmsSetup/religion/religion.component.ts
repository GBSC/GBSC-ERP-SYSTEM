import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SetupService } from '../../../core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-religion',
    templateUrl: './religion.component.html',
    styleUrls: ['./religion.component.css']
})
export class ReligionComponent implements OnInit {

    public religion: any;
    public modelUpdating: any;

    constructor(public httpClient: HttpClient, public dataService: SetupService) { }

    async ngOnInit() {

        this.religion = await this.dataService.getAllReligions();
    }


    async addNewreligion(religon) {
        await this.dataService.addReligion(religon.data);
        this.religion = await this.dataService.getAllReligions();
    }

    updatingreligion(value) {
        this.modelUpdating= {...value.oldData, ...value.newData};
    }
    
    async updatereligion() {
        await this.dataService.updateReligion(this.modelUpdating);
    }

    async deletereligion(religon) {
        await this.dataService.DeleteReligion(religon.key);
    }

}