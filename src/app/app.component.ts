import { Component } from '@angular/core';
import { PwaHelperService } from './services/pwa-helper.service';

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

  constructor(
    private _pwaHelper: PwaHelperService,
  ) {
    this._pwaHelper.init();
  }
}
