import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';

declare let mLayout: any;
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {

        mLayout.initHeader();

    }

}
