import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { ActivatedRoute, Router } from '@angular/router';
declare let mLayout: any;


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    constructor(public route: ActivatedRoute, public router: Router) { }

    ngOnInit() {
    }

    ngAfterViewInit() {

        mLayout.initAside();

    }


}
