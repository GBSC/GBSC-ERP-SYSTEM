import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shop-status-detail',
    templateUrl: './shop-status-detail.component.html',
    styleUrls: ['./shop-status-detail.component.scss']
})
export class ShopStatusDetailComponent implements OnInit {
    showHideFilter: boolean = false;
    constructor() { }

    ngOnInit() {
    }
    toggleFilter() {
        this.showHideFilter = !this.showHideFilter;
    }
}
