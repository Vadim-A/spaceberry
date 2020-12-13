import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { moduleLinks } from '../../constants/app-links';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class LoginPageRedirectGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (
      state.url === `/${moduleLinks.login}` &&
      this.authService.getCurrentUser()
    ) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
