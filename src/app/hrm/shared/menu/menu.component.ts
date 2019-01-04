import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { ActivatedRoute, Router } from '@angular/router';
declare let mLayout: any;
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit, AfterViewInit {

    constructor(public route: ActivatedRoute, public router: Router) { }

    ngOnInit() {
    }
    ngAfterViewInit() {

        mLayout.initAside();

    }


    // showUrl() {
    //     this.router.navigate(['hrmsSetup/bank']);
    //     console.log(this.route.snapshot.url);
    // }

}
