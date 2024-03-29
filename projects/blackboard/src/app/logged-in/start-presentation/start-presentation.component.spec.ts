import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatCardTitle } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormFieldTestingModule } from 'projects/form-fields/src/public-api';

import { AuthService } from '../../services/auth.service';
import { PresentationService } from '../services/presentation.service';
import { StartPresentationComponent } from './start-presentation.component';

describe('StartPresentationComponent', () => {
  let component: StartPresentationComponent;
  let fixture: ComponentFixture<StartPresentationComponent>;

  const auth = jasmine.createSpyObj(['getUser']);
  auth.getUser.and.returnValue(Promise.resolve('Stephen'));

  const router = jasmine.createSpyObj(['navigateByUrl']);

  const pService = jasmine.createSpyObj(['setValues']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartPresentationComponent],
      imports: [FormFieldTestingModule, MatCardModule],
      providers: [
        { provide: AuthService, useValue: auth },
        { provide: Router, useValue: router },
        { provide: PresentationService, useValue: pService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header', () => {
    expect(
      fixture.debugElement.query(By.directive(MatCardTitle)).nativeElement
        .innerText,
    ).toBe('Setup Presentation');
  });
});
