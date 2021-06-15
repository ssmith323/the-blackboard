import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractFormHandler } from 'projects/form-fields/src/lib/abstract-form-handler';

import { AuthService } from '../services/auth.service';
import { emailCheck } from './validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends AbstractFormHandler {
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) {
    super();
    this.form = this.fb.group({
      email: ['', [Validators.required, emailCheck()]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  async submit() {
    const user = this.form.value;
    try {
      await this.auth.createUser(user);
      this.router.navigateByUrl('/home');
    } catch (e) {
      console.log(e);
    }
  }
}
