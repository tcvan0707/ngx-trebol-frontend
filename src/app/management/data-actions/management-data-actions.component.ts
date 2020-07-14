import { Component, EventEmitter, Output } from '@angular/core';

/**
 * Generic action buttons bar. Should be placed below data listing components.
 */
@Component({
  selector: 'app-management-data-actions',
  templateUrl: './management-data-actions.component.html',
  styleUrls: ['./management-data-actions.component.css']
})
export class ManagementDataActionsComponent {

  @Output() public add: EventEmitter<void>;

  constructor() {
    this.add = new EventEmitter();
  }

  public onClickAdd(): void {
    this.add.emit();
  }

}
