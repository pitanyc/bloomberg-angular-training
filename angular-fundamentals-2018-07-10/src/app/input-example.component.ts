import { Component } from '@angular/core';

@Component({
  selector: 'app-input-example',
  template: `
    <p>Username:
      <input
        (input)="username = $event.target.value"
        [value]="username"
      ></p>
    <p>You have entered the username: {{ username }}</p>

    <p>Username2:
    <input
      [(ngModel)]="username2"
    ></p>
  <p>You have entered the username: {{ username2 }}</p>

    `
})
export class InputExampleComponent {
  username = 'joe';
  username2 = 'joe';
}
