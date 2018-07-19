import { Routes } from '@angular/router';

import { FooComponent } from './hello.component';
import { CounterComponent } from './counter.component';
import { ImageSelectorComponent } from './image-selector.component';
import { MouseTrackerComponent } from './mouse-tracker.component';

const routes: Routes = [
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
  { path: 'hello', component: FooComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'image-selector', component: ImageSelectorComponent },
  { path: 'mouse-tracker', component: MouseTrackerComponent },
];
export default routes;

