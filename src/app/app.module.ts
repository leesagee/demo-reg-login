import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page_components/home/home.component';
import { RegisterComponent } from './page_components/register/register.component';
import { LoginComponent } from './page_components/login/login.component';
import { AlertComponent } from './alert_components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [ 
  ],

  bootstrap: [
    AppComponent
  ]

})

export class AppModule { };
