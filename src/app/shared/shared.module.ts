import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { InstallerComponent } from './installer/installer.component';
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
  ],
})
export class SharedModule { }
