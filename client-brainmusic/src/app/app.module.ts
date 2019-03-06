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
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    EmailFormComponent,
    AlertComponent,
    HomepageComponent,
    NavbarHeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegisterService,
    EmailService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
