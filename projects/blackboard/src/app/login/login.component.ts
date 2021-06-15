import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractFormHandler } from 'projects/form-fields/src/lib/abstract-form-handler';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends AbstractFormHandler implements OnInit {
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async submit(): Promise<void> {
    const { email, password } = this.form.value;
    await this.auth.signIn(email, password);
    this.router.navigateByUrl('/home');
  }
}
