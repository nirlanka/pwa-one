import { Component } from '@angular/core';

@Component({
  selector: 'one-root',
  template: `
    <h1>Haha</h1>  

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'pwa-one';

  constructor() { }
}
