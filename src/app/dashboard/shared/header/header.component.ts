import { Component, OnInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { AccountService } from '../../../core';

 declare let mLayout: any;
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
<<<<<<< HEAD
    constructor() { }
=======
    constructor(private accountService : AccountService) { }
>>>>>>> master

    ngOnInit() {
    }

    logout()
    {
        this.accountService.logout();
    }

}
