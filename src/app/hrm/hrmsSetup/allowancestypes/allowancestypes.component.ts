import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { SetupService } from '../../../core';

@Component({
    selector: 'app-allowancestypes',
    templateUrl: './allowancestypes.component.html',
    styleUrls: ['./allowancestypes.component.css']
})
export class AllowancesTypeComponent implements OnInit {


    public allowance: any;
    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }


    async ngOnInit() {
        await this.dataService.getAllAllowancesType();
        this.allowance = this.dataService.allowancetype;
        console.log(this.allowance);
        // this.dataService.GetAllAllowancesType().subscribe((data)=>this.AllowancesType=data);
    }

    // If you don't need a filter or a pagination this can be simplified, you just use code from else block

    addAllowances(alowance) {

        this.dataService.addAllowancesType(alowance.data);
    }

    EditAllowances(allownce) {

        this.dataService.updateAllowancesType(allownce);
    }

    deleteAllowances(alowncetype) {

        this.dataService.DeleteAllowancesType(alowncetype.key)
    }
}