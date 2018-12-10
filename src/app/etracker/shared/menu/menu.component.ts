import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare let mLayout: any;

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit, AfterViewInit {

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
    }
    
    ngAfterViewInit() {

        mLayout.initAside();

    }
}
