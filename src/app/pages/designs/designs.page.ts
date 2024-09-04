import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-designs',
  standalone: true,
  imports: [
    MatButtonModule,
    MatButton,
    TranslocoPipe
  ],
  templateUrl: './designs.page.html',
  styleUrl: './designs.page.scss'
})
export class DesignsPage {

}
