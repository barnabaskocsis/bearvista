import { Routes } from '@angular/router';
import { UrlPath } from '~models/url-path';

export const routes: Routes = [
  {
    path: UrlPath.Home, pathMatch: 'full',
    loadComponent: () => import('~pages/home/home.page').then(m => m.HomePage),
    canActivate: [],
  },
  {
    path: UrlPath.Games,
    loadComponent: () => import('~pages/games/games.page').then(m => m.GamesPage),
    canActivate: [],
  },
  {
    path: UrlPath.Designs,
    loadComponent: () => import('~pages/designs/designs.page').then(m => m.DesignsPage),
    canActivate: [],
  },
  { path: '**', redirectTo: UrlPath.Home },
];
