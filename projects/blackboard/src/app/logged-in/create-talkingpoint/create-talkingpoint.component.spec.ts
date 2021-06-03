import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTalkingpointComponent } from './create-talkingpoint.component';

describe('CreateTalkingpointComponent', () => {
  let component: CreateTalkingpointComponent;
  let fixture: ComponentFixture<CreateTalkingpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTalkingpointComponent ]
    })
    .compileComponents();
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
