import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(public router: Router, public route: ActivatedRoute, public accountService: AuthService, public ApiService: ApiService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.accountService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

}