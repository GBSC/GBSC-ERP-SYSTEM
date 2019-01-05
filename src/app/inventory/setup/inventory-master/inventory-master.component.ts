import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-inventory-master',
    templateUrl: './inventory-master.component.html',
    styleUrls: ['./inventory-master.component.scss']
})
export class InventoryMasterComponent implements OnInit {

    tabs: string[] = ['product-type', 'brand', 'product-category', 'unit', 'pack-category', 'pack-type', 'pack-size', 'package-type', 'inventory'];
    selectedTab = this.tabs[0];

    constructor() { }

    ngOnInit() {
    }

}
