import { Component, Input } from '@angular/core';
import { ConfirmationMode } from '../../models/shared';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {

  @Input() title!: string;
  @Input() message = '';
  @Input() mode = '';

  modeEvent = ConfirmationMode;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationComponent>,
  ) { }

}
