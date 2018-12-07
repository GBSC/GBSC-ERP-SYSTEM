import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { AuthService } from '../../../app/core/Services/Auth/auth.service';

declare let mLayout: any;
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
    constructor(private authService: AuthService) { }

    ngOnInit() {
    }

    ngAfterViewInit() {

        mLayout.initHeader();

    }

    logout() {
        this.authService.logout();
    }

}
