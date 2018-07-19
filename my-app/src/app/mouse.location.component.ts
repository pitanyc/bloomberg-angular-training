import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse-location',
  template: `
  <div (document:mousemove)="onMouseMove($event)">
    <h3>== Mouse Location Component ==</h3>
    <p>Mouse X: {{ mouse.x }}</p>    
    <p>Mouse Y: {{ mouse.y }}</p>    
  </div>
  `,
})

export class MouseLocationComponent {
  private mouse = {
    x: 0,
    y: 0
  }

  onMouseMove(event) {
    // console.log(event);
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  }

}