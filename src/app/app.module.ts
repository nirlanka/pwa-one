import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule, SwPush } from '@angular/service-worker';

import { environment } from '../environments/environment';

import { AppRoutingModule, routes } from './app-routing.module';

import { AppComponent } from './app.component';

import { PwaHelperService } from './services/pwa-helper.service';
import { NewsService } from './api/news.service';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(
      routes, 
      {
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  providers: [
    PwaHelperService,
    NewsService,
    SwPush,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
