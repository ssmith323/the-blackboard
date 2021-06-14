import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { FormFieldTestingModule } from 'projects/form-fields/src/public-api';

import { AuthService } from '../services/auth.service';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  const authService = jasmine.createSpyObj(['createUser']);
  authService.createUser.and.returnValue(Promise.resolve());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [FormFieldTestingModule, RouterTestingModule, MatCardModule],
      providers: [{ provide: AuthService, useValue: authService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit register form', async () => {
    await component.submit();

    expect(authService.createUser).toHaveBeenCalled();
  });

  it('should fail submit register form', async () => {
    authService.createUser.and.returnValue(Promise.reject());
    await component.submit();

    expect(authService.createUser).toHaveBeenCalled();
  });
});
