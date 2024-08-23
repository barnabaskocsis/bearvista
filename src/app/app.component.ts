import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavigationComponent } from '~components/navigation/navigation.component';
import { CustomSidenavComponent } from '~components/navigation/custom-sidenav/custom-sidenav.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, CustomSidenavComponent, MatButton, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'learning';
}
