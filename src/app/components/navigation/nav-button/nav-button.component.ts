import { Component, Input } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-button',
  standalone: true,
  imports: [
    MatFabButton,
    RouterLink
  ],
  templateUrl: './nav-button.component.html',
  styleUrl: './nav-button.component.scss'
})
export class NavButtonComponent {

  @Input() route: string = '';
  @Input() iconSrc: string = '';
  @Input() label: string = '';

}
