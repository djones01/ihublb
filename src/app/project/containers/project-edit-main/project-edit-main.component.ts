import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ProjectService } from '../../project.service';
import { Project } from '../../../shared/models/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-edit-main',
  templateUrl: './project-edit-main.component.html',
  styleUrls: ['./project-edit-main.component.scss']
})
export class ProjectEditMainComponent implements OnInit {
  public projectForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private projectService: ProjectService) { }

  saveProject(event){
    this.projectService.add(event);
    this.router.navigateByUrl('/pages/projects');
  }

  ngOnInit() {
    this.projectForm = this.fb.group({
      name: ['',Validators.required],
      description: '',
      type: ['', Validators.required]
    });
    this.projectService.editProject.subscribe((editProject: Project) => {
        if(editProject){
          this.projectForm.patchValue(editProject);
        }
    });
  }
}
