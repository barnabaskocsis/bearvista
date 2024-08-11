import { Routes } from '@angular/router';
import { UrlPath } from '~models/UrlPath';

export const routes: Routes = [
  {
    path: UrlPath.Home, pathMatch: 'full',
    loadComponent: () => import('~pages/home/home.page').then(m => m.HomePage),
    canActivate: [],
  },
  { path: '**', redirectTo: UrlPath.Home },
];
