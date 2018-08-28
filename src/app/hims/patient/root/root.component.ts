import { Component, OnInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';


import { ScriptLoaderService } from '../../../_services/script-loader.service';



@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss'],


})
export class RootComponent implements OnInit {

    constructor(private _script: ScriptLoaderService, private _router: Router) { }

    ngOnInit() {
        this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js'], true)
            .then(result => {
                Helpers.setLoading(false);
                // optional js to be loaded once
                this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js'], true);
            });

    }

}
