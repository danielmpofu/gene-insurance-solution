import {Injectable} from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() {
  }

  confirmMessage(message: string, callbackFunction: () => any) {
    alertify.confirm(message, (e: any) => {
      if (e) {
        callbackFunction();
      } else {
      }
    });
  }

  successMessage(message: string) {
    alertify.success(message);
  }

  errorMessage(message: string) {
    alertify.error(message);
  }

  warningMessage(message: string) {
    alertify.warning(message);
  }

  normalMessage(msg: string) {
    alertify.message(msg);
  }

}
