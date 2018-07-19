import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-demo',
  template: `
    <ul>
      <li *ngFor="let fruitItem of fruit; let i = index">
        Item {{i}}: {{fruitItem}}
      </li>
    </ul>
  `,
  styles: [`
    li {
      list-style-type: none;
    }
  `]
})
export class NgForDemoComponent {
  fruit = ['apple', 'banana', 'custard apple', 'durian', 'fig'];
}
