import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTalkingpointComponent } from './edit-talkingpoint.component';

describe('EditTalkingpointComponent', () => {
  let component: EditTalkingpointComponent;
  let fixture: ComponentFixture<EditTalkingpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTalkingpointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTalkingpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
