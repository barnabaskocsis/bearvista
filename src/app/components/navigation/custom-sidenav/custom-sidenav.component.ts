import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatButton, MatFabAnchor, MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    NgClass,
    MatIconButton,
    MatFabAnchor,
    MatIcon
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {
  @ViewChild('contentTemplate', { static: true }) template!: TemplateRef<any>;

  isExpanded = false;

  expand() {
    this.isExpanded = !this.isExpanded;
  }
}
