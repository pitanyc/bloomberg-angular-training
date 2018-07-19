import { Routes } from '@angular/router';

import { HelloComponent } from './hello.component';
import { CounterComponent } from './counter.component';

export const routes: Routes = [
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
  { path: 'hello', component: HelloComponent },
  { path: 'count', component: CounterComponent },
];