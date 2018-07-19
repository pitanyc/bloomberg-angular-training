import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h1>Hello</h1>
    <p>Hello {{name}}</p>
    Content here: <ng-content></ng-content>
    <p>Today: {{ today | date }}</p>
    <p [textContent]="name"></p>
    <a [href]="linkTarget" [textContent]="linkName"></a>
  `
})
export class FooComponent {
  name = 'Peter';
  linkTarget = 'https://bloomberg.com';
  linkName = 'Bloomberg';
  today = new Date();
}


