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
    public modelUpdating: any;

    constructor(public httpClient: HttpClient, public dataService: SetupService) { }

    async ngOnInit() {

        this.group = await this.dataService.getAllGroups();
    }

    async addNewGroups(grp) {
        await this.dataService.addGroup(grp.data);
        this.group = await this.dataService.getAllGroups();
    }

    async groupUpdaing(value) {
        this.modelUpdating = { ...value.oldData, ...value.newData };
    }

    async EditGroup() {
        await this.dataService.updateGroup(this.modelUpdating);
    }

    async deleteGroup(grup) {
        await this.dataService.DeleteGroup(grup.key);
    }

}