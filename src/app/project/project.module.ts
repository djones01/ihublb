import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectRoutingModule } from './project-routing.module';

// feature modules
import { IntegrationModule } from '../integration/integration.module';

// third party modules 
import { 
  CalendarModule, 
  DataTableModule, 
  DialogModule, 
  ConfirmDialogModule, 
  ConfirmationService, 
  PanelModule, 
  DropdownModule, 
  StepsModule,
  TieredMenuModule
} from 'primeng/primeng';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Dumb components
import { ProjectEditComponent } from './edit/project-edit.component';
import { ProjectListComponent } from './list/project-list.component';
import { ProjectCardComponent } from './card/project-card.component';
import { ProjectDetailComponent } from './detail/project-detail.component';

// Containers
import { ProjectEditMainComponent } from './containers/project-edit-main/project-edit-main.component';
import { ProjectListMainComponent } from './containers/project-list-main/project-list-main.component';
import { ProjectComponent } from './project.component';

// Services
import { ProjectService } from './project.service';
import { ProjectEditIntegrationsComponent } from './containers/project-edit-integrations/project-edit-integrations.component';
import { ProjectEditUsersComponent } from './containers/project-edit-users/project-edit-users.component';
import { ProjectEditOverviewComponent } from './containers/project-edit-overview/project-edit-overview.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IntegrationModule,
    DataTableModule,
    DropdownModule,
    PanelModule,
    StepsModule,
    TieredMenuModule,
    NgbModule
  ],
  declarations: [
    ProjectCardComponent,
    ProjectDetailComponent,
    ProjectEditComponent,
    ProjectListComponent,
    ProjectComponent,
    ProjectEditMainComponent,
    ProjectListMainComponent,
    ProjectEditIntegrationsComponent,
    ProjectEditUsersComponent,
    ProjectEditOverviewComponent
  ],
  providers: []
})
export class ProjectModule { }
