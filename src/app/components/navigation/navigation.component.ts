import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CustomSidenavComponent } from '~components/navigation/custom-sidenav/custom-sidenav.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    NgClass,
    MatButton,
    RouterLink,
    NgIf,
    NgTemplateOutlet
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements AfterContentInit {
  @ContentChild(CustomSidenavComponent) customSidenavComponent!: CustomSidenavComponent;

  ngAfterContentInit() {
    console.log(this.customSidenavComponent);
  }
}
