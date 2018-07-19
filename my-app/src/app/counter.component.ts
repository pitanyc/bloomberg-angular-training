import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>== Counter Component ==</h3>
  <p>Value: {{ value }}</p>    
  <button (click)="increase()">Increase</button>
  <br/>
  <button (click)="decrease()">Decrease</button>
  `,
})

export class CounterComponent {
  private value: number = 0;

  decrease() {
    this.value--;
  }

  increase() {
    this.value++;
  }
}