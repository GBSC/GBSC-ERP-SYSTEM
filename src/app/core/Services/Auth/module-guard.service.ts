import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class ModuleGuardService implements CanActivate {

    constructor(private router: Router, private route: ActivatedRoute, private accountService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let module = state.url.split('/')[1];
        if (this.accountService.checkIfModuleIsAccessible(module)) {
            return true;
        } else {
            alert('You cannot access this module');
            return false;
        }
    }
}
