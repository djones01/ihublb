import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-edit-integrations',
  templateUrl: './project-edit-integrations.component.html',
  styleUrls: ['./project-edit-integrations.component.css']
})
export class ProjectEditIntegrationsComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
