import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router,
  ) {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  async submit() {
    const user = this.registerForm.value;
    try {
      await this.auth.createUserWithEmailAndPassword(user.email, user.password);
      await this.auth.signInWithEmailAndPassword(user.email, user.password);
      this.router.navigateByUrl('/home');
    } catch (e) {
      console.log(e);
    }
  }
}
