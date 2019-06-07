import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private _http: HttpClient
  ) { }

  addPushSubscriber(sub: PushSubscription) {
    return this._http.post(environment.API_BASE + 'subscription', sub);
  }
}
