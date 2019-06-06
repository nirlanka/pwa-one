import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PwaHelperService {
  private _deferredPrompt: any;

  constructor() { }

  init() {
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
}
