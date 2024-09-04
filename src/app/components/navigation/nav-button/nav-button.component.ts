import { Component, input } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-nav-button',
  standalone: true,
  imports: [
    MatFabButton,
    RouterLink,
    RouterLinkActive,
    NgClass
  ],
  templateUrl: './nav-button.component.html',
  styleUrl: './nav-button.component.scss'
})
export class NavButtonComponent {

  route = input.required<string>();
  iconSrc = input.required<string>();
  label = input.required<string>();

}
