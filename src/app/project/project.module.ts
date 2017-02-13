import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectRoutingModule } from './project-routing.module';

// Primeng module imports 
import { CalendarModule, DataTableModule, DialogModule, ConfirmDialogModule, ConfirmationService, PanelModule, DropdownModule } from 'primeng/primeng';

// Dumb components
import { ProjectEditComponent } from './edit/project-edit.component';
import { ProjectListComponent } from './list/project-list.component';
import { ProjectCardComponent } from './card/project-card.component';
import { ProjectDetailComponent } from './detail/project-detail.component';
import { ProjectDeleteOptionsComponent } from './delete/project-delete-options.component';
import { ProjectComponent } from './project.component';

// Containers
import { ProjectEditMainComponent } from './containers/project-edit-main/project-edit-main.component';
import { ProjectListMainComponent } from './containers/project-list-main/project-list-main.component';

// Services
import { ProjectService } from './project.service';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    DropdownModule
  ],
  declarations: [
    ProjectCardComponent,
    ProjectDetailComponent,
    ProjectEditComponent,
    ProjectListComponent,
    ProjectDeleteOptionsComponent,
    ProjectComponent,
    ProjectEditMainComponent,
    ProjectListMainComponent
  ],
  providers: [ProjectService]
})
export class ProjectModule { }
