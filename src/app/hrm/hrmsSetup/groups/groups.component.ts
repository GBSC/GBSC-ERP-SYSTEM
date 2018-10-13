import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SetupService } from '../../../core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.css']
})
export class GroupComponent implements OnInit {

    public group: any;
    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }

    async ngOnInit() {

        await this.dataService.getAllGroups();
        this.group = this.dataService.group;
    }

    addNewGroups(grp) {
        this.dataService.addGroup(grp.data);
    }

    EditGroup(grop) {
        this.dataService.updateGroup(grop);
    }

    deleteGroup(grup) {
        this.dataService.DeleteGroup(grup.key);
    }

}