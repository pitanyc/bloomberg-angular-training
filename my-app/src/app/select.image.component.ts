import { Component } from '@angular/core';

@Component({
  selector: 'app-select-image',
  template: `
  <h3>== Select Image Component ==</h3>
  <img [src]="image.src" height="240" width="240"> 
  <button (click)="selectImage(1)">Image 1</button>
  <button (click)="selectImage(2)">Image 2</button>
  <button (click)="selectImage(3)">Image 3</button>
  `,
})

export class SelectImageComponent {
  private image = {
    src: './assets/beach.jpeg'
  }

  selectImage(imageNumber) {
    console.log(imageNumber);

    switch (imageNumber) {
      case 1:
        this.image.src = './assets/beach.jpeg';
        break;
      case 2:
        this.image.src = './assets/palm.jpeg';
        break;
      case 3:
        this.image.src = './assets/turtle.jpeg';
        break;
      default:
        // do nothing
        break;
    }
  }

}