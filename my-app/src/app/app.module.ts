import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AlertButtonComponent } from './alert.component';
import { CounterComponent } from './counter.component';
import { MouseLocationComponent } from './mouse.location.component';
import { SelectImageComponent } from './select.image.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AlertButtonComponent,
    CounterComponent,
    MouseLocationComponent,
    SelectImageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
