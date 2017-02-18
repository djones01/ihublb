import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-edit-overview',
  templateUrl: './project-edit-overview.component.html',
  styleUrls: ['./project-edit-overview.component.css']
})
export class ProjectEditOverviewComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
