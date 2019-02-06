import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService } from '../../../../../src/app/core';

@Component({
    selector: 'app-inventory-master',
    templateUrl: './inventory-master.component.html',
    styleUrls: ['./inventory-master.component.scss']
})
export class InventoryMasterComponent implements OnInit {

    tabs: string[] = ['Product Type', 'Brand', 'Product Category', 'Unit', 'Pack Category', 'Pack Type', 'Pack Size', 'Oil Type', 'Products', 'General Sku'];
    selectedTab = this.tabs[0];

    constructor() { }

    ngOnInit() {
    }

}
