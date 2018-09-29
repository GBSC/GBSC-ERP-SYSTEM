import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../service.service';

@Injectable()
export class ModuleGuardService implements CanActivate {

    constructor(private router: Router, private route: ActivatedRoute, private accountService: AccountService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('it worked');
        let module = state.url.split('/')[1];
        console.log(module);
        if (this.accountService.checkIfModuleIsAccessible(module)) {
            return true;
        } else {
            alert('You cannot access this module');
            return false;
        }
    }
}
