import { AuthenticationService } from '@/services/authentication.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // user is authorized
            return true;
        }

        // initial start page and when current user isnt logged in - redirect to login page
        this.router.navigate(['/register'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}