import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormBuilderService } from '../../../shared/services/form-builder.service';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-functional-area-edit-main-list',
  templateUrl: './functional-area-edit-main-list.component.html',
  styleUrls: ['./functional-area-edit-main-list.component.css']
})
export class FunctionalAreaEditMainListComponent implements OnInit {
 @Input() form: FormGroup;

  addIntegration(){
    const functionalAreasControl = <FormArray>this.form.get('functionalAreas');
    functionalAreasControl.push(this.formBuilderService.initFunctionalAreaForm());
  }

  removeIntegration(i: number){
    const functionalAreasControl = <FormArray>this.form.get('functionalAreas');
    this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this integration?',
            accept: () => {
               functionalAreasControl.removeAt(i);
            }
        });
  }

  constructor(private formBuilderService: FormBuilderService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
  }
}
