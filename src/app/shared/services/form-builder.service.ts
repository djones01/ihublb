import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

// model imports
import { Project } from '../models/index';
import { Integration } from '../models/integration';

@Injectable()
export class FormBuilderService {

  initProjectForm(project?: Project){
    let form = this.fb.group({
      name: ['',Validators.required],
      description: '',
      type: ['', Validators.required],
      integrations: this.fb.array([]),
      projectUsers: this.fb.array([])
    });
    if(project){
      if(project.integrations)
        for(var i = 0; i < project.integrations.length; i++){
          (<FormArray>form.get('integrations')).push(this.initIntegrationForm())
        }
      if(project.projectUsers)
        for(var i = 0; i < project.projectUsers.length; i++){
          (<FormArray>form.get('projectUsers')).push(this.initProjectUserForm());
        }
      form.patchValue(project);
      return form;
    }
    else{
      return form;
    }
  }

  initIntegrationForm(integration?: Integration){
    return this.fb.group({
      name: ['New Integration', Validators.required],
      description: '',
      source_system: ['', Validators.required],
      target_system: ['', Validators.required],
      source_system_release: '',
      target_system_release: '',
      effective_date: new Date(),
      active: true,
      hidden: false
    });
  }

  initProjectUserForm(){
    return this.fb.group({
      user: [null, Validators.required],
      effective_date: new Date(),
      active_on_project: true
    });
  }

  constructor(private fb: FormBuilder) { }

}
