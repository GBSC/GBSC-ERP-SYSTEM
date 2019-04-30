import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { AuthService } from '../../../app/core/Services/Auth/auth.service';

declare let mLayout: any;

enum modules {
    Secuirty = 1,
    HR,
    HMS,
    Lab,
    Coordination,
    Pharmacy,
    Payroll,
    Finance,
    eTracker
}


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

    public accessableModules: string[] = [];
    public accessibleFeatures : string[] = [];
    public Username : string = '';
    public UserLevel : string = '';


    constructor(public authService: AuthService) {


    }

    ngOnInit() {

        this.accessableModules = this.authService.getAccessableModulesAndFeatures().modules;
        this.accessibleFeatures = this.authService.getAccessableModulesAndFeatures().features;

        //   console.log(this.accessableModules);
        // console.log(this.accessibleFeatures);

        this.Username = this.authService.getProfileInfo().Username;
        this.UserLevel = this.authService.getProfileInfo().UserLevel;



    }

    ngAfterViewInit() {

        mLayout.initHeader();
    }

    logout() {
        this.authService.logout();
    }



}
