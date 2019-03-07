import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterFormComponent} from './user/register-form/register-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RegisterService} from './shared/register.service';
import {EmailFormComponent} from './admin/email-form/email-form.component';
import {AlertComponent} from './alert/alert.component';
import {EmailService} from './shared/email.service';
import {ListFeedbackComponent} from './admin/list-feedback/list-feedback.component';
import {PlayerComponent} from './user/player/player.component';
import {MatDialogModule, MatSnackBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';
import {FeedbackComponent} from './user/feedback/feedback.component';
import {FeedbackService} from './shared/feedback.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    EmailFormComponent,
    AlertComponent,
    PlayerComponent,
    ListFeedbackComponent,
    PlayerComponent,
    AdminComponent,
    UserComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    RegisterService,
    EmailService,
    FeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
