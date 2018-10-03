import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'; 
import { SetupService } from '../../../core';

@Component({
    selector: 'app-advancetypes',
    templateUrl: './advancetypes.component.html',
    styleUrls: ['./advancetypes.component.css']
})
export class AdvanceTypeComponent implements OnInit {


    public advncetype: any;
    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }



    async ngOnInit() {

        await this.dataService.getAllAdvanceType();
        this.advncetype = this.dataService.advancetype;
        // this.dataService.GetAllAdvanceType().subscribe((data)=>this.AdvanceType=data);
    }

    // If you don't need a filter or a pagination this can be simplified, you just use code from else block

    addAdvanceType(atype) {
        this.dataService.addAdvanceType(atype.data)
    }

    EditAdvanceType(advncetype) {
        this.dataService.updateAdvanceType(advncetype);
    }

    deleteAdvanceType(actype) {
        this.dataService.DeleteAdvanceType(actype.key);
    }
}

