import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../api.service';
import { AccountService } from './service.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router, private route: ActivatedRoute, private accountService: AccountService, private ApiService: ApiService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log("Authenticating");
        if (this.accountService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

}