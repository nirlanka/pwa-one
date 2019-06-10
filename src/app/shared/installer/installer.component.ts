import { Component, OnInit } from '@angular/core';

import { PwaHelperService } from 'src/app/services/pwa-helper.service';

@Component({
  selector: 'one-installer',
  template: `
    <div>
      <button (click)="onClickInstall()">Install</button>
    </div>
  `,
  styles: []
})
export class InstallerComponent implements OnInit {

  constructor(
    private _pwaHelper: PwaHelperService,
  ) { }

  ngOnInit() {
  }

  onClickInstall() {
    this._pwaHelper.init();
  }

}
