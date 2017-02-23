import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FunctionalAreaRoutingModule } from './functional-area-routing.module';

// Third-party imports
import { DataTableModule, InputSwitchModule, CalendarModule } from 'primeng/primeng';

// Components
import { FunctionalAreaComponent } from './functional-area.component';
import { FunctionalAreaCardComponent } from './card/functional-area-card.component';
import { FunctionalAreaListComponent } from './list/functional-area-list.component';
import { FunctionalAreaEditComponent } from './edit/functional-area-edit.component';
import { FunctionalAreaEditMainListComponent } from './containers/functional-area-edit-main-list/functional-area-edit-main-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    FunctionalAreaRoutingModule,
    DataTableModule, 
    InputSwitchModule,
    CalendarModule
  ],
  declarations: [
    FunctionalAreaComponent, 
    FunctionalAreaCardComponent, 
    FunctionalAreaListComponent, 
    FunctionalAreaEditComponent, FunctionalAreaEditMainListComponent
    ]
})
export class FunctionalAreaModule { }
