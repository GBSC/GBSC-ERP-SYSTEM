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
    private Username : string = '';
    private UserLevel : string = '';

    constructor(public authService: AuthService) { }

    ngOnInit() {

        let modules = this.authService.getAccessableModules();

        for (let module of modules) {
            this.accessableModules.push(module.Description);
        }

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
