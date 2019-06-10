import { Component, OnInit } from '@angular/core';

import { PwaHelperService } from 'src/app/services/pwa-helper.service';

@Component({
  selector: 'one-welcome',
  template: `
    <div *ngIf="pwaHelper.isInstallEnabled">
      <one-installer></one-installer>
      <one-enable-notifications></one-enable-notifications>
    </div>
  `,
  styles: []
})
export class WelcomeComponent implements OnInit {

  constructor(
    public pwaHelper: PwaHelperService,
  ) { }

  ngOnInit() {
  }

}
