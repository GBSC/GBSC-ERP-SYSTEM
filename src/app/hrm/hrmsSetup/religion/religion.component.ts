import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SetupService } from '../../../core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-religion',
    templateUrl: './religion.component.html',
    styleUrls: ['./religion.component.css']
})
export class ReligionComponent implements OnInit {

    public religion: any;

    constructor(public httpClient: HttpClient, public dataService: SetupService) { }

    async ngOnInit() {
        
        this.religion = await this.dataService.getAllReligions();
    }


    addNewreligion(religon) {
        this.dataService.addReligion(religon.data);
        this.religion = this.dataService.getAllReligions();
    }

    updatereligion(religon) {
        this.dataService.updateReligion(religon);
    }

    deletereligion(religon) {
        this.dataService.DeleteReligion(religon.key);
    }

}