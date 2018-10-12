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

    constructor(public httpClient: HttpClient,
        public dataService: SetupService) { }



    async ngOnInit() {
        await this.dataService.getAllCostCenter();
        this.ccenter = this.dataService.costcenter;
        console.log(this.ccenter);
        // this.dataService.GetAllCostCenter().subscribe((data)=>this.CostCenter=data);
    }


    // If you don't need a filter or a pagination this can be simplified, you just use code from else block

    addNewCostCenter(cc) {
        this.dataService.addCostCenter(cc.data);
    }

    EditCost(costcntr) {
        this.dataService.updateCostCenter(costcntr);
    }

    deleteCost(costcnter) {

        this.dataService.DeleteCostCenter(costcnter.key);
    }
}