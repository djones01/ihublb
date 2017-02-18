import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../../shared/models/project';
import { ProjectService } from '../../project.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-project-list-main',
  templateUrl: './project-list-main.component.html',
  styleUrls: ['./project-list-main.component.scss']
})
export class ProjectListMainComponent implements OnInit {
  private projects$: Observable<Project[]>;
  private selectedItem: Project;

  private items: MenuItem[];

  onSelectedItem(event){
    this.selectedItem = event;
  }

  editProject(){
    this.projectService.setEditProject(this.selectedItem);
    this.router.navigateByUrl('/pages/projects/edit');
  }

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects$ = this.projectService.projects;

    this.items = [
      { label: 'Projects', items:[
          { label: 'Add', icon: 'fa-plus' },
          { label: 'Edit', icon: 'fa-edit' }
        ]
      },
      { 
        label: 'Add', 
        items: [
                    { label: 'Project User', icon: 'fa-user' },
                    {label: 'Integration', icon: 'fa-plug'}
                ]
      },
      {
        label: 'Delete',
        items: [
          { label: 'Project' },
          { label: 'Project and Integrations' },
          { label: 'Project, Integrations, and Conversions' },
          { label: 'Nuke All Project Materials' }
        ]
      }
    ];
  }
}
