import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { FormFieldTestingModule } from 'projects/form-fields/src/public-api';

import { AuthService } from '../../services/auth.service';
import { TalkingpointService } from '../services/talkingpoint.service';
import { CreateTalkingpointComponent } from './create-talkingpoint.component';

describe('CreateTalkingpointComponent', () => {
  let component: CreateTalkingpointComponent;
  let fixture: ComponentFixture<CreateTalkingpointComponent>;

  const auth = jasmine.createSpyObj(['getUser']);
  auth.getUser.and.returnValue(Promise.resolve('Stephen'));

  const tpService = jasmine.createSpyObj(['save']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTalkingpointComponent],
      imports: [FormFieldTestingModule, RouterTestingModule, MatCardModule],
      providers: [
        { provide: TalkingpointService, useValue: tpService },
        { provide: AuthService, useValue: auth },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTalkingpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
