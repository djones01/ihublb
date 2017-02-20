import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Project } from "../shared/models/index";
import { DataService } from "../shared/services/data.service";
import { Router } from "@angular/router";
import { AlertService } from "../shared/alert/alert.service";

@Injectable()
export class ProjectService {
    private _projects: BehaviorSubject<Project[]> = new BehaviorSubject([]);
    projects: Observable<Project[]> = this._projects.asObservable();
    private _editProject: BehaviorSubject<Project> = new BehaviorSubject(null);
    editProject: Observable<Project> = this._editProject.asObservable();

    editing: boolean = false;

    private dataStore: {
        projects: Project[]
    };

    loadall() {
        this.dataService.GetAll("projects")
            .subscribe(projects => {
                this.dataStore.projects = projects;
                this._projects.next(Object.assign({}, this.dataStore).projects);
            }, error => {
                console.log(error);
                //this.alertService.error('Error', 'Encountered error while loading Projects');
            });
    }

    setEditProject(editProject: Project){ 
        this._editProject.next(editProject);
        this.editing = true;
    }

    add(project: Project) {
        this.dataService.Add('projects', project).subscribe(project => {
            this.dataStore.projects.push(project);
            this._projects.next(Object.assign({}, this.dataStore).projects);
        }, error => {
            console.log(error);
            //this.alertService.error('Error', 'Encountered error while adding Project');
        });
    }

    update(project: Project) {
        let editId = this._editProject.getValue().id;
        project.id = editId;
        this.dataService.Update('projects', editId, project).subscribe(() => {
            this.dataStore.projects.forEach((p, i) => {
                if (p.id === project.id) { this.dataStore.projects[i] = project; }
            });
            this._projects.next(Object.assign({}, this.dataStore).projects);
        }, error => {
            console.log(error);
            //this.alertService.error('Error', 'Encountered error while updating Project');
        });
        this.editing = false;
        this._editProject.next(null);
    }

    delete(id: number) {
        this.dataService.Delete('projects', id).subscribe(response => {
            this.dataStore.projects.forEach((p, i) => {
                if (p.id === id) { this.dataStore.projects.splice(i, 1); }
            });
            this._projects.next(Object.assign({}, this.dataStore).projects);
        }, error => {
            console.log(error);
            //this.alertService.error('Error', 'Encountered error while deleting Project');
        });
    }



    constructor(private router: Router, private dataService: DataService /*private alertService: AlertService*/) {
        this.dataStore = { projects: [] };
        this.loadall();
    }
}
