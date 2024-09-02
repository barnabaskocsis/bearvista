import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavigationComponent } from '~components/navigation/navigation.component';
import { CustomSidenavComponent } from '~components/navigation/custom-sidenav/custom-sidenav.component';
import { MatButton } from '@angular/material/button';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavModule
} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatSidenavModule, NavigationComponent, CustomSidenavComponent, MatButton, RouterLink, MatDrawerContainer, MatDrawer,
    MatDrawerContent, MatSidenav, MatSidenavContainer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'learning';
}
