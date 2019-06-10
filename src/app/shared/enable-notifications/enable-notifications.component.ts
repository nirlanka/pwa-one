import { Component, OnInit } from '@angular/core';

import { PwaHelperService } from 'src/app/services/pwa-helper.service';

@Component({
  selector: 'one-enable-notifications',
  template: `
    <div>
      <button (click)="onClickEnable()">Install</button>
    </div>
  `,
  styles: []
})
export class EnableNotificationsComponent implements OnInit {

  constructor(
    private _pwaHelper: PwaHelperService,
  ) { }

  ngOnInit() {
  }

  onClickEnable() {
    this._pwaHelper.subscribeToNotifications();
  }

}
