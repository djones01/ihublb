import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-functional-area-edit',
  templateUrl: './functional-area-edit.component.html',
  styleUrls: ['./functional-area-edit.component.css']
})
export class FunctionalAreaEditComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() inFlow: boolean;

  constructor() { }

  ngOnInit() {
  }


}
