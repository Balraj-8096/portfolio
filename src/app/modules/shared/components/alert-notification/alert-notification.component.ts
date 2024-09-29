import { Component, Input } from '@angular/core';
import { Alert, AlertType } from '../../models/shared';

@Component({
  selector: 'app-alert-notification',
  templateUrl: './alert-notification.component.html',
  styleUrls: ['./alert-notification.component.scss']
})
export class AlertNotificationComponent {

  @Input() alerts!: Alert[];

  enumAlertType = AlertType;

  addAlert(alert: Alert) {
    this.alerts.push();
  }

  getAlertInfo(alertCode: AlertType) {
    switch (alertCode) {
      case this.enumAlertType.WARNING:
        return {
          class: 'warning-alert',
          icon: `<i class="fas fa-exclamation-circle"></i>`,
        };
      case this.enumAlertType.ERROR:
        return {
          class: 'error-alert',
          icon: `<i class="fas fa-times-circle"></i>`,
        };
      case this.enumAlertType.INFO:
        return {
          class: 'info-alert',
          icon: `<i class="fas fa-info-circle"></i>`,
        };
      case this.enumAlertType.SUCCESS:
        return {
          class: 'success-alert',
          icon: `<i class="fas fa-check-circle"></i>`,

        };
      default:
        return { class: '', icon: '' };
    }
  }

  dismissAlert(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
