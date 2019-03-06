import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RegisterService} from './shared/register.service';
import {EmailFormComponent} from './email-form/email-form.component';
import {AlertComponent} from './alert/alert.component';
import {EmailService} from './shared/email.service';
import { PlayerComponent } from './player/player.component';
import {MatSnackBarModule, MatDialogModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    EmailFormComponent,
    AlertComponent,
    PlayerComponent
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
  providers: [RegisterService,
    EmailService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
