import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services';
import { navigationLink, NAVIGATION_LINKS } from './navigations-link';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellComponent implements OnInit {
  navigationLinks = NAVIGATION_LINKS;

  activeNavigationLink?: navigationLink;

  constructor(private authService: AuthService, private router: Router) {
    this.activeNavigationLink = this.navigationLinks.find((link) =>
      this.router.url.startsWith('/' + link.path)
    );
    console.log(this.router.url);
  }

  ngOnInit(): void {}

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onNavigationLinkClick($event: any) {
    console.log($event);
  }
}
