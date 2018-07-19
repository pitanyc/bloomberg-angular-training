import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse-tracker',
  template: `
    <div (mousemove)="trackMouse($event, $event.clientX, $event.clientY)">
      <p>x: {{x}}</p>
      <p>y: {{y}}</p>
    </div>
  `,
  styles: [`
    div {
      width: 400px;
      height: 400px;
      background-color: beige;
    }
  `]
})
export class MouseTrackerComponent {
  x: number;
  y: number;

  trackMouse(e, clientX: number, clientY: number) {
    this.x = clientX;
    this.y = clientY;
    // console.log(e);
  }
}
