import { Routes } from '@angular/router';
import { UrlPath } from '~models/url-path';

export const routes: Routes = [
  {
    path: UrlPath.Home, pathMatch: 'full',
    loadComponent: () => import('~pages/home/home.page').then(m => m.HomePage),
    canActivate: [],
  },
  {
    path: UrlPath.Lobby,
    loadComponent: () => import('~pages/lobby/lobby.page').then(m => m.LobbyPage),
    canActivate: [],
  },
  { path: '**', redirectTo: UrlPath.Home },
];
