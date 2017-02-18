import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {
    @Input() data: any[];
    @Input() canSelect: boolean;
    @Output() selectedItem = new EventEmitter();
    @Output() menuAction = new EventEmitter();

    private types = [
      { label: 'All Types', value: null },
      { label: 'Upgrade', value: 'Upgrade' },
      { label: 'Enhancement', value: 'Enhancement' },
      { label: 'New Installation', value: 'New Installation' },
      { label: 'Retrofit', value: 'Retrofit' }
    ];

    onRowSelect(event) {
        this.selectedItem.emit(event.data);
    }
}
