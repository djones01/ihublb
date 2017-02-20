import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-integration-list',
  templateUrl: './integration-list.component.html',
  styleUrls: ['./integration-list.component.scss']
})
export class IntegrationListComponent {
    @Input() data: any[];
    @Input() canSelect: boolean;
    @Output() selectedItem = new EventEmitter();

    onRowSelect(event) {
        this.selectedItem.emit(event.data);
    }
}
