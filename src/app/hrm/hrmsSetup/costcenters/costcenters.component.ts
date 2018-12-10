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

    public costCenter: any;
    public modelUpdating: any;

    constructor(public httpClient: HttpClient, public dataService: SetupService) { }
 
    async ngOnInit() {
        this.costCenter = await this.dataService.getAllCostCenter();
    }

    async addNewCostCenter(cc) {
        await this.dataService.addCostCenter(cc.data);
        this.costCenter = await this.dataService.getAllCostCenter();

    }

    costcntrUpdating(value) {
        this.modelUpdating = {...value.oldData, ...value.newData};
    }

    async editCostCenter() {
        await this.dataService.updateCostCenter(this.modelUpdating);
    }

    async deleteCost(costcnter) {
        await this.dataService.DeleteCostCenter(costcnter.key);
    }
}