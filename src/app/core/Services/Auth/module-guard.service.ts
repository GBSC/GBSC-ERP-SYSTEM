import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class ModuleGuardService implements CanActivate {

    constructor(public router: Router, public route: ActivatedRoute, public accountService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('it worked');
        let module = state.url.split('/')[1];
        if (this.accountService.checkIfModuleIsAccessible(module)) {
            return true;
        } else {
            alert('You cannot access this module');
            return false;
        }
    }
}
