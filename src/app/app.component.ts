import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavigationComponent } from '~components/navigation/navigation.component';
import { CustomSidenavComponent } from '~components/navigation/custom-sidenav/custom-sidenav.component';
import { MatButton, MatFabButton, MatIconButton } from '@angular/material/button';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavModule
} from '@angular/material/sidenav';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NavButtonComponent } from '~components/navigation/nav-button/nav-button.component';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, NavigationComponent, CustomSidenavComponent, MatButton, RouterLink, MatIconModule,
    MatDrawerContainer, MatDrawer, MatDrawerContent, MatSidenav, MatSidenavContainer, NgClass, MatIconButton,
    MatFabButton, NgOptimizedImage, NavButtonComponent, TranslocoPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Welcome';
}
