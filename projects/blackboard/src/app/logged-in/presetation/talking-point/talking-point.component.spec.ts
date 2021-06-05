import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkingPointComponent } from './talking-point.component';

describe('TalkingPointComponent', () => {
  let component: TalkingPointComponent;
  let fixture: ComponentFixture<TalkingPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalkingPointComponent ]
    })
    .compileComponents();
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
