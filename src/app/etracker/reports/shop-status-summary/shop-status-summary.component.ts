import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shop-status-summary',
    templateUrl: './shop-status-summary.component.html',
    styleUrls: ['./shop-status-summary.component.scss']
})
export class ShopStatusSummaryComponent implements OnInit {
    showHideFilter: boolean = false;
    constructor() { }

    ngOnInit() {
    }
    toggleFilter() {
        this.showHideFilter = !this.showHideFilter;
    }
}
