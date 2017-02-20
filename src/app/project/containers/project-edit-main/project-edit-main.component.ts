import { Component, OnInit, Input } from '@angular/core';
import { FormBuilderService } from '../../../shared/services/form-builder.service';
import { FormGroup } from '@angular/forms';
import { ProjectService } from '../../project.service';
import { Project } from '../../../shared/models/index';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-project-edit-main',
  templateUrl: './project-edit-main.component.html',
  styleUrls: ['./project-edit-main.component.scss']
})
export class ProjectEditMainComponent implements OnInit {
  public projectForm: FormGroup;
  private activeStep: number = 0;
  private items: MenuItem[];

  nextStep(){
    this.activeStep++;
  }
  previousStep(){
    this.activeStep--;
  }

  constructor(private fbService: FormBuilderService, private router: Router, private projectService: ProjectService) { }

  saveProject(event){
    this.projectService.add(event);
    this.router.navigateByUrl('/pages/projects');
  }

  ngOnInit() { 
    this.items = [
            {label: 'Project Details'},
            {label: 'Integrations'},
            {label: 'Project Users'},
            {label: 'Review'}
        ];

    this.projectService.editProject.subscribe(editProject => {
      this.projectForm = this.fbService.initProjectForm(editProject);
    });
  }
}
