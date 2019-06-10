import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';

import { environment } from 'src/environments/environment';

import { NewsService } from '../api/news.service';

@Injectable({
  providedIn: 'root'
})
export class PwaHelperService {
  private _deferredPrompt: any;

  constructor(
    private _swPush: SwPush,
    private _news: NewsService,
  ) { }

  install() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();

      // Stash the event so it can be triggered later.
      this._deferredPrompt = e;

      this._deferredPrompt.prompt();

      this._deferredPrompt.userChoice
        .then((choiceResult: { outcome: string; }) => {
          if (choiceResult.outcome === 'accepted') {
            alert('User accepted the A2HS prompt');
          } else {
            alert('User dismissed the A2HS prompt');
          }

          this._deferredPrompt = null;
        });
    });

    window.addEventListener('appinstalled', (evt) => {
      alert('App installed');
    });
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
