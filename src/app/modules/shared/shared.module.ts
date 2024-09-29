import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { StatusComponent } from './components/status/status.component';
import { NotificationComponent } from './components/notification/notification.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AlertNotificationComponent } from './components/alert-notification/alert-notification.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';
import { DateFormatPipe } from './pipes/date-format/date-format.pipe';
import { HightlightFiltervaluePipe } from './pipes/highlight-filtervalue/hightlight-filtervalue.pipe';
import { AccessCheckPipe } from './pipes/accessCheck/access-check.pipe';
import { MaterialModule } from '../materials/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoDataFoundComponent } from './components/no-data-found/no-data-found.component';
import { InformationDetailsComponent } from './components/information-details/information-details.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

@NgModule({
  declarations: [
    StatusComponent,
    NotificationComponent,
    LoaderComponent,
    AlertNotificationComponent,
    ConfirmationComponent,
    NoDataFoundComponent,
    InformationDetailsComponent,
    FileUploadComponent,
    ProfilePageComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    StatusComponent,
    NotificationComponent,
    LoaderComponent,
    AlertNotificationComponent,
    ConfirmationComponent,
    NoDataFoundComponent,
    MaterialModule,
    ProfilePageComponent

  ],
  providers: [
    CurrencyPipe,
    TruncatePipe,
    HightlightFiltervaluePipe,
    DateFormatPipe,
    AccessCheckPipe
  ]
})
export class SharedModule { }
