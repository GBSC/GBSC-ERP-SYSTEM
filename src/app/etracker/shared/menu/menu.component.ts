import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core';
declare let mLayout: any;

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit, AfterViewInit {

    public accessibleFeatures : string[] = [];

    constructor(public route: ActivatedRoute, public router: Router, private AuthService : AuthService) { }

    ngOnInit() {
        this.accessibleFeatures = this.AuthService.getAccessableModulesAndFeatures().features;
    }

    ngAfterViewInit() {

        mLayout.initAside();

    }
}
