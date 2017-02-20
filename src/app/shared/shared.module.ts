import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MenuModule } from 'primeng/primeng';
import { SidebarModule } from 'ng-sidebar';

import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { SubNavigationComponent } from './sub-navigation/sub-navigation.component';
import { LoaderComponent } from './loader/loader.component';

import { DataService } from './services/data.service';
import { FormBuilderService } from './services/form-builder.service';
import { FilteredDataService } from './services/filtered-data.service';

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
  providers: [DataService, FormBuilderService, FilteredDataService]
})
export class SharedModule {}
