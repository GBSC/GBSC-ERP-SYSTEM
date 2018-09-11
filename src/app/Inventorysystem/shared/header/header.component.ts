import { Component, OnInit } from '@angular/core';
import { Helpers } from '../../../helpers';

declare let mLayout: any;
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    // ngAfterViewInit() {

    //     mLayout.initHeader();

    // }

}
