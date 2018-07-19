import { Component } from '@angular/core';

@Component({
  selector: 'alert-button',
  template: `
    <h3>== Alert Component ==</h3>
    <form>
      <button (click)="showAlert($event)">Alert me</button>
    </form>
  `,
})

export class AlertButtonComponent {
  showAlert(e) {
    e.preventDefault();
    alert('Button clicked');
    console.log(e);
  }
}