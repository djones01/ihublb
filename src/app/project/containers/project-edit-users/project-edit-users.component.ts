import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-edit-users',
  templateUrl: './project-edit-users.component.html',
  styleUrls: ['./project-edit-users.component.css']
})
export class ProjectEditUsersComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
