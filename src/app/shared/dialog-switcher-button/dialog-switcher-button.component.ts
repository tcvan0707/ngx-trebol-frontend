import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-switcher-button',
  templateUrl: './dialog-switcher-button.component.html',
  styleUrls: ['./dialog-switcher-button.component.css']
})
export class DialogSwitcherButtonComponent {

  @Input() public label: string | null;
  @Input() public sourceDialogRef: MatDialogRef<any>;
  @Input() public targetDialogComponent: any;
  @Input() public targetDialogData: any;

  constructor(
    protected dialogService: MatDialog
  ) {
  }

  public onClick(): void {
    this.sourceDialogRef.close();
    this.dialogService.open(
      this.targetDialogComponent,
      this.targetDialogData
    );
  }

}
