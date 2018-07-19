import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooComponent } from './hello.component';
import { AlertButtonComponent } from './alert.component';
import { CounterComponent } from './counter.component';
import { MouseTrackerComponent } from './mouse-tracker.component';
import { ImageSelectorComponent } from './image-selector.component';
import { NgForDemoComponent } from './ngfor-demo.component';
import { InputExampleComponent } from './input-example.component';

import routes from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    AlertButtonComponent,
    MouseTrackerComponent,
    ImageSelectorComponent,
    NgForDemoComponent,
    InputExampleComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
