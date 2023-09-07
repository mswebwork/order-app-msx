import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = new FormControl('', [Validators.required, Validators.email])
  hidePassword = true;

  getErrorMsg() {
    if (this.email.hasError('require')) {
      return 'Wprowadź swój e-mail';
    }

    return this.email.hasError('email') ? 'Nie poprawny e-mail!' : '';
  }
}
