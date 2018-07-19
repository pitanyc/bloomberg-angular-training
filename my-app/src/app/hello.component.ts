import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  name = 'Peter';
  theUrl = 'https://www.blooomberg.com';
  theText = 'Click here to goto bloomberg.com';

  today = new Date();
  money = 129.26913;
  list = ['apple', 'banana', 'peach', 'berry', 'ginger', 'lemon', 'lime'];
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
}
