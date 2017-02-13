import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectEditComponent implements OnInit {
  @Input() form: FormGroup;
  @Output() formSubmitted = new EventEmitter();

  onSubmit(value){
    this.formSubmitted.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }
}
