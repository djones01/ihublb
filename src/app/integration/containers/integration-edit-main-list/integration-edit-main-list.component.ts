import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormBuilderService } from '../../../shared/services/form-builder.service';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-integration-edit-main-list',
  templateUrl: './integration-edit-main-list.component.html',
  styleUrls: ['./integration-edit-main-list.component.scss']
})
export class IntegrationEditMainListComponent implements OnInit {
  @Input() form: FormGroup;

  addIntegration(){
    const integrationsControl = <FormArray>this.form.get('integrations');
    integrationsControl.push(this.formBuilderService.initIntegrationForm());
  }

  removeIntegration(i: number){
    const integrationsControl = <FormArray>this.form.get('integrations');
    this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this integration?',
            accept: () => {
               integrationsControl.removeAt(i);
            }
        });
  }

  constructor(private formBuilderService: FormBuilderService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
  }

}
