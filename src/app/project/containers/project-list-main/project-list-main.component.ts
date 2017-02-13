import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../../shared/models/project';
import { ProjectService } from '../../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list-main',
  templateUrl: './project-list-main.component.html',
  styleUrls: ['./project-list-main.component.scss']
})
export class ProjectListMainComponent implements OnInit {
  private projects$: Observable<Project[]>;
  private selectedItem: Project;

  onSelectedItem(event){
    this.selectedItem = event;
  }

  editProject(){
    this.projectService.setEditProject(this.selectedItem);
    this.router.navigateByUrl('/pages/projects/edit');
  }

  deleteProject(){
    this.projectService.delete(this.selectedItem.id);
  }

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects$ = this.projectService.projects;
  }

}
