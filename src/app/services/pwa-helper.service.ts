import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';

import { environment } from 'src/environments/environment';

import { NewsService } from '../api/news.service';

@Injectable({
  providedIn: 'root'
})
export class PwaHelperService {
  private _deferredPrompt: any;

  private _isInstallEnabled = false;
  get isInstallEnabled() {
    return this._isInstallEnabled;
  }
  set isInstallEnabled(v) {
    ; // do nothing
  }

  private _installEnabledEvent: Event;

  constructor(
    private _swPush: SwPush,
    private _news: NewsService,
  ) { }

  init() {
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('Install enabled');
      this._isInstallEnabled = true;
      this._installEnabledEvent = e;
    });

    window.addEventListener('appinstalled', this._onFinishInstall);
  }

  install() {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    this._installEnabledEvent.preventDefault();

    // Stash the event so it can be triggered later.
    this._deferredPrompt = this._installEnabledEvent;

    this._deferredPrompt.prompt();

    this._deferredPrompt.userChoice
      .then((choiceResult: { outcome: string; }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Install accepted');
        } else {
          console.log('Install dismissed');
        }

        this._deferredPrompt = null;
      });
  }

  private _onFinishInstall(evt: Event) {
    console.log('App installed');
  }

  subscribeToNotifications() {
    this._swPush.requestSubscription({
      serverPublicKey: environment.VAPID_PUBLIC_KEY
    })
    .then(sub => {
      this._news.addPushSubscriber(sub).subscribe();
    })
    .catch(err => console.error("Could not subscribe to notifications", err));
  }
}
