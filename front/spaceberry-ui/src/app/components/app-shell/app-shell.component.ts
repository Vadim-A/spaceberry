import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { moduleLinks } from 'src/app/core/constants/app-links';
import { AuthService } from 'src/app/core/services';

interface navigationLink {
  path: string;
  title: string;
}

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellComponent implements OnInit {
  navigationLinks: navigationLink[] = [
    {
      path: moduleLinks.home,
      title: 'Главная',
    },
    {
      path: moduleLinks.settings,
      title: 'Настройки',
    },
  ];

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
