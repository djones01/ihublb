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

    private types = [
      { label: 'All Types', value: null },
      { label: 'Upgrade', value: 'upgrade' },
      { label: 'Enhancement', value: 'enhancement' },
      { label: 'New Installation', value: 'new' },
      { label: 'Retrofit', value: 'retrofit' }
    ];

    onRowSelect(event) {
        this.selectedItem.emit(event.data);
    }
}
