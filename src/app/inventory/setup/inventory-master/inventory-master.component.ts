import { Component, OnInit } from '@angular/core';
import { SystemAdministrationService } from '../../../../../src/app/core';

@Component({
    selector: 'app-inventory-master',
    templateUrl: './inventory-master.component.html',
    styleUrls: ['./inventory-master.component.scss']
})
export class InventoryMasterComponent implements OnInit {

    tabs: string[] = ['product-type', 'brand', 'product-category', 'unit', 'pack-category', 'pack-type', 'pack-size', 'oil-type', 'products', 'general-sku'];
    selectedTab = this.tabs[0];

    constructor() { }

    ngOnInit() {
    }

}
