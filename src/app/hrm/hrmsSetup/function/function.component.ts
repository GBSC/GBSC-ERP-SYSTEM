import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
 
import { HrmsService } from '../services/hrms.service';

import { BehaviorSubject } from 'rxjs';

import { SetupService } from '../services/setup.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'; 

@Component({
    selector: 'app-function',
    templateUrl: './function.component.html',
    styleUrls: ['./function.component.css']
})
export class FunctionComponent implements OnInit {
    public func: any;

    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }

    async ngOnInit() {
        // this.dataService.getAllFunctions().subscribe((data)=>this.funct=data);

        await this.dataService.getAllFunctions();
        this.func = this.dataService.function;
        console.log(this.func);

    }


    addNewfunction(func) {
        this.dataService.addFunction(func.data);
    }

    Editfunction(fun) {

        this.dataService.updatefunction(fun);
    }

    deletefunc(fnc) {
        this.dataService.Deletefunction(fnc.key);
    }

}