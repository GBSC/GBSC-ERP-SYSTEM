import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Helpers } from "./helpers";
import { ScriptLoaderService } from './_services/script-loader.service';
import { AuthService } from './core';

declare let mLayout: any;
declare let mApp: any;
declare let mUtil: any;

@Component({
    selector: 'body',
    templateUrl: './app.component.html',
    styles: [`
    app-loginform {
        height: 100%;
    }
    `],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

    get authorized(): boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        return false;
    }

    title = 'app';
    globalBodyClass = 'm-page--loading-non-block m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-light m-aside-left--fixed m-aside-left--offcanvas m-aside-left--minimize m-brand--minimize m-footer--push m-aside--offcanvas-default';

    constructor(private _script: ScriptLoaderService, private authService: AuthService, private _router: Router) {
    }

    public ngOnInit() {

        this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js', 'assets/demo/demo7/base/scripts.bundle.js'], true)
            .then(result => {
                Helpers.setLoading(false);
                // optional js to be loaded once
                this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js']);
            });


        this._router.events.subscribe(event => {
            if (event instanceof NavigationStart) {

                (<any>mLayout).closeMobileAsideMenuOffcanvas();
                (<any>mLayout).closeMobileHorMenuOffcanvas();
                (<any>mApp).scrollTop();
                Helpers.setLoading(true);
                // hide visible popover
                (<any>$('[data-toggle="m-popover"]')).popover('hide');

                Helpers.setLoading(true);
                Helpers.bodyClass(this.globalBodyClass);

                let url = (<NavigationStart>event).url;
                if (url !== url.toLowerCase()) {
                    this._router.navigateByUrl((<NavigationStart>event).url.toLowerCase());
                }
            }
            if (event instanceof NavigationEnd) {
                // init required js
                (<any>mApp).init();
                (<any>mUtil).init();
                Helpers.setLoading(false);
                // content m-wrapper animation
                let animation = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
                    $('.m-wrapper').removeClass(animation);
                }).removeClass(animation).addClass(animation);

                Helpers.setLoading(false);
            }
        });
    }



}
