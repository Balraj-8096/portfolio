import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmptyOptionsMode } from '../../models/shared';

@Component({
  selector: 'app-no-data-found',
  templateUrl: './no-data-found.component.html',
  styleUrls: ['./no-data-found.component.scss']
})
export class NoDataFoundComponent {

  @Input() emptyOptionsMode!: EmptyOptionsMode;
  @Output() response = new EventEmitter();

  resolve() {
    this.response.emit();
  }
}
