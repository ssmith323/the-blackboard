import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { FormFieldTestingModule } from 'projects/form-fields/src/public-api';

import { AuthService } from '../services/auth.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const auth = jasmine.createSpyObj(['signIn']);
  auth.signIn.and.returnValue(Promise.resolve());

  const router = jasmine.createSpyObj(['navigateByUrl']);
  router.navigateByUrl.and.returnValue();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormFieldTestingModule, MatCardModule],
      providers: [
        { provide: AuthService, useValue: auth },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit when saved', async () => {
    component.form.get('email')?.setValue('hi');
    component.form.get('password')?.setValue('hi');

    component.submit();

    expect(auth.signIn).toHaveBeenCalledWith('hi', 'hi');
    // expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
  });
});
