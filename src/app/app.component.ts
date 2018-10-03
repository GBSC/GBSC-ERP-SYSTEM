import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Helpers } from "./helpers";

@Component({
    selector: 'body',
    templateUrl: './app.component.html',
    styles:[`
    app-loginform {
        height: 100%;
    }
    `],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
    title = 'app';
    globalBodyClass = 'm-page--loading-non-block m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-light m-aside-left--fixed m-aside-left--offcanvas m-aside-left--minimize m-brand--minimize m-footer--push m-aside--offcanvas-default';

    constructor(private _router: Router) {
    }

    public ngOnInit() {
        this._router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                Helpers.setLoading(true);
                Helpers.bodyClass(this.globalBodyClass);

                let url = (<NavigationStart>event).url;
                if (url !== url.toLowerCase()) {
                    this._router.navigateByUrl((<NavigationStart>event).url.toLowerCase());
                }
            }
            if (event instanceof NavigationEnd) {
                Helpers.setLoading(false);
            }
        });
    }


}
