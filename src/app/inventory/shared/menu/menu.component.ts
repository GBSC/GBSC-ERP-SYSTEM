import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { AuthService } from '../../../core';

declare let mLayout: any;

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {
<<<<<<< HEAD
    private accessibleFeatures: string[] = [];

    constructor(private AuthService: AuthService) { }
=======
    public accessibleFeatures : string[] = [];

    constructor(public AuthService: AuthService) { }
>>>>>>> d51916d9e93536b321defeab6962c14758a32089

    ngOnInit() {
        this.accessibleFeatures = this.AuthService.getAccessableModulesAndFeatures().features;
    }
    ngAfterViewInit() {

        mLayout.initAside();

    }


}
