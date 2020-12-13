import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  MatSelectionList,
  MatSelectionListChange,
} from '@angular/material/list';
import { Router } from '@angular/router';
import { moduleLinks } from 'src/app/core/constants/app-links';
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

  constructor(
    private authService: AuthService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.activeNavigationLink = this.navigationLinks.find((link) =>
      this.router.url.startsWith('/' + link.path)
    );
  }

  ngOnInit(): void {}

  onMessagesClick() {
    this.activeNavigationLink = this.navigationLinks.find(
      (link) => link.path === moduleLinks.messages
    );
    this.router.navigate(['/' + moduleLinks.messages]);
  }

  onSelectionChange(data: MatSelectionListChange) {
    this.activeNavigationLink = this.navigationLinks.find(
      (link) => data.source._value![0] === link.path
    );
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/' + moduleLinks.login]);
  }

  onNavigationLinkClick($event: any) {
    console.log($event);
  }
}
