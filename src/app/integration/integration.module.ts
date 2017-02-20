import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntegrationRoutingModule } from './integration-routing.module';

import { 
  CalendarModule, 
  InputSwitchModule 
} from 'primeng/primeng';

import { IntegrationEditComponent } from './edit/integration-edit.component';
import { IntegrationListComponent } from './list/integration-list.component';
import { IntegrationCardComponent } from './card/integration-card.component';
import { IntegrationDetailComponent } from './detail/integration-detail.component';
import { IntegrationComponent } from './integration.component';
import { IntegrationEditMainListComponent } from './containers/integration-edit-main-list/integration-edit-main-list.component';

@NgModule({
  imports: [
    CommonModule,
    IntegrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    InputSwitchModule
  ],
  declarations: [
    IntegrationCardComponent,
    IntegrationDetailComponent,
    IntegrationEditComponent,
    IntegrationListComponent,
    IntegrationComponent,
    IntegrationEditMainListComponent
  ],
  exports: [IntegrationEditMainListComponent]
})
export class IntegrationModule { }
