import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SetupService } from '../../../core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-function',
    templateUrl: './function.component.html',
    styleUrls: ['./function.component.css']
})
export class FunctionComponent implements OnInit {
    public func: any;
    public updatingModel: any;

    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }

    async ngOnInit() {
        this.func = await this.dataService.getAllFunctions();
    }


    async addNewfunction(func) {
        await this.dataService.addFunction(func.data);
        this.func = await this.dataService.getAllFunctions();
    }

    functionEditing(value) {
        this.updatingModel = { ...value.oldData, ...value.newData };
    }

    async Editfunction() {
        await this.dataService.updatefunction(this.updatingModel);
    }

    async deletefunc(fnc) {
        await this.dataService.Deletefunction(fnc.key);
    }

}