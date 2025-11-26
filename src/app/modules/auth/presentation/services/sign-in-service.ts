import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface IForm {
  email: FormControl;
  password: FormControl;
}
@Injectable({
  providedIn: 'root',
})
export class SignInService {
  form: IForm = {
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  };

  formGroup = new FormGroup(this.form);
}
