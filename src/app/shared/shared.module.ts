import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'primeng/primeng';
import { SidebarModule } from 'ng-sidebar';

import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { RouterModule } from '@angular/router';
import { SubNavigationComponent } from './sub-navigation/sub-navigation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';

import { DataService } from './services/data.service';

import { AlertModule } from './alert/alert.module';

@NgModule({
  declarations: [
    MainNavigationComponent,
    SubNavigationComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    MenuModule,
    AlertModule
  ],
  exports: [
    MainNavigationComponent,
    LoaderComponent,
    SubNavigationComponent
  ],
  providers: [DataService]
})
export class SharedModule {}
