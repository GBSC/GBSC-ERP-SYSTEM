import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { SetupService } from '../services/setup.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'; 

@Component({
    selector: 'app-branch',
    templateUrl: './branch.component.html',
    styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
    public branch: any;

    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }


    async ngOnInit() {
        // this.dataService.getAllbranches().subscribe((data)=>this.branch=data);
        await this.dataService.getAllbranches();
        this.branch = this.dataService.branch;
        console.log(this.branch);
    }


    // If you don't need a filter or a pagination this can be simplified, you just use code from else block

    addNew() {
    }

    startEdit() {

    }

    deletebranch() {

    }
}
