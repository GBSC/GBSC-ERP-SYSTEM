import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { SetupService } from '../../../core';

@Component({
    selector: 'app-costcenters',
    templateUrl: './costcenters.component.html',
    styleUrls: ['./costcenters.component.css']
})
export class CostCenterComponent implements OnInit {
    public ccenter: any;

    constructor(public httpClient: HttpClient,public dataService: SetupService) { }



    async ngOnInit() {
        this.ccenter = await this.dataService.getAllCostCenter();
    }

    addNewCostCenter(cc) {
        this.dataService.addCostCenter(cc.data);
        this.ccenter = this.dataService.getAllCostCenter();

    }

    EditCost(costcntr) {
        this.dataService.updateCostCenter(costcntr);
    }

    deleteCost(costcnter) {

        this.dataService.DeleteCostCenter(costcnter.key);
    }
}