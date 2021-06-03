import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardHarness } from '@angular/material/card/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormFieldTestingModule } from 'projects/form-fields/src/public-api';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  const authService = jasmine.createSpyObj(['createUser']);
  authService.createUser.and.returnValue(Promise.resolve());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [FormFieldTestingModule, RouterTestingModule, MatCardHarness],
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
});
