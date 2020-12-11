import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { moduleLinks } from './core/constants/app-links';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { LoginPageRedirectGuard } from './core/guards/login-page-redirect-guard/login-page-redirect.guard';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: moduleLinks.home,
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
        data: { preload: true },
      },
      {
        path: moduleLinks.settings,
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
        data: { preload: true },
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: moduleLinks.login,
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
    canActivate: [LoginPageRedirectGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
