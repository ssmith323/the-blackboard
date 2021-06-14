import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormFieldTestingModule } from 'projects/form-fields/src/public-api';

import { AuthService } from '../../services/auth.service';
import { TalkingpointService } from '../services/talkingpoint.service';
import { CreateTalkingpointComponent } from './create-talkingpoint.component';

describe('CreateTalkingpointComponent', () => {
  let component: CreateTalkingpointComponent;
  let fixture: ComponentFixture<CreateTalkingpointComponent>;

  const auth = jasmine.createSpyObj(['getUser']);
  auth.getUser.and.returnValue(Promise.resolve('Stephen'));

  const router = jasmine.createSpyObj(['navigateByUrl']);
  router.navigateByUrl.and.returnValue();

  const activedRoute = { snapshot: { params: {} } };

  const tpService = jasmine.createSpyObj(['save', 'getByKey']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTalkingpointComponent],
      imports: [FormFieldTestingModule, MatCardModule, MatToolbarModule],
      providers: [
        { provide: TalkingpointService, useValue: tpService },
        { provide: AuthService, useValue: auth },
        { provide: Router, useValue: router },
        { provide: ActivatedRoute, useValue: activedRoute },
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

  it('should submit', () => {
    component.submit();

    expect(tpService.save).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
  });
});
