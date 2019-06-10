import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PwaHelperService } from '../services/pwa-helper.service';

import { InstallerComponent } from './installer/installer.component';
import { NewsService } from '../api/news.service';
import { EnableNotificationsComponent } from './enable-notifications/enable-notifications.component';

@NgModule({
  declarations: [
    InstallerComponent,
    EnableNotificationsComponent,
  ],
  exports: [
    InstallerComponent,
    EnableNotificationsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    PwaHelperService,
    NewsService
  ],
})
export class SharedModule { }
