import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2PageTransition } from 'ng2-page-transition';
import { ConfirmationService } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';

import { SharedModule } from './shared/shared.module';

import { AppSettings } from './app-settings';

import { ProjectService } from './project/project.service';

@NgModule({
  declarations: [
    AppComponent,
    Ng2PageTransition
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    HomeModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [ConfirmationService, AppSettings, ProjectService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
