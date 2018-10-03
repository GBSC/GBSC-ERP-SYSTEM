import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../../_services/script-loader.service';
import { Router } from '@angular/router';
import { Helpers } from '../../helpers';


@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styles: ['.m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body {padding-left: 0px;}'],
    styleUrls: ['./root.component.scss'],

})
export class RootComponent implements OnInit {

    constructor(private _script: ScriptLoaderService, private _router: Router) { }

    ngOnInit() {
        this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js', 'assets/app/js/dashboard-erp.js'], true)
            .then(result => {
                Helpers.setLoading(false);
                // optional js to be loaded once
                this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js'], true);
            });

    }

    ngAfterViewInit() {
        this._script.loadScripts('body',
            ['assets/demo/default/custom/components/forms/widgets/bootstrap-datepicker.js']);

    }

}
