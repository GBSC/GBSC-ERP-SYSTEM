import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { AccountService } from '../../../core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    constructor(private accountService : AccountService) { }

    ngOnInit() {
    }

    logout()
    {
        //this.accountService.logout();
    }

}
