import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shop-census-detail',
    templateUrl: './shop-census-detail.component.html',
    styleUrls: ['./shop-census-detail.component.scss']
})
export class ShopCensusDetailComponent implements OnInit {
    showHideFilter: boolean = false;
    constructor() { }

    ngOnInit() {
    }
    toggleFilter() {
        this.showHideFilter = !this.showHideFilter;
    }
}
