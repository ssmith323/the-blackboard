import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { TalkingpointService } from '../../services/talkingpoint.service';
import { TalkingPointComponent } from './talking-point.component';

describe('TalkingPointComponent', () => {
  let component: TalkingPointComponent;
  let fixture: ComponentFixture<TalkingPointComponent>;

  const tpService = jasmine.createSpyObj(['getBeforeToday']);
  tpService.getBeforeToday.and.returnValue(of([]));
  const activedRoute = { params: of({ id: '11' }) };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TalkingPointComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: TalkingpointService, useValue: tpService },
        { provide: ActivatedRoute, useValue: activedRoute },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkingPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
