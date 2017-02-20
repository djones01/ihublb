import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-integration-edit',
  templateUrl: './integration-edit.component.html',
  styleUrls: ['./integration-edit.component.scss']
})
export class IntegrationEditComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() inFlow: boolean;

  constructor() { }

  ngOnInit() {
  }

}
