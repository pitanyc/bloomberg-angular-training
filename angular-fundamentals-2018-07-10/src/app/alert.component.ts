import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-button',
  template: `
    <button (click)="showAlert($event)">Alert me</button>
  `,
})
export class AlertButtonComponent {
  i = 0;

  showAlert(e) {
    alert('Button clicked');
    console.log(e);
    this.i++;
  }
}
