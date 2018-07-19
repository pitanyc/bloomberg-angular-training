import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <p>{{ count }}</p>
      <button (click)="decrement()">
        -
      </button>
      <button (click)="increment()">
        +
      </button>
  `,
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
