import { Component, computed, effect, signal } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatButton
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {

  readonly count = signal(0);
  readonly agent = signal("Agent nr.");

  readonly agentName = computed(() => `${this.agent()} ${this.count()}`)

  constructor() {
    effect(() => {
      console.log(`The count is now: ${this.count()}`);
    });

  }

  increment(): void {
    this.count.set(this.count() + 1);
  }

}
