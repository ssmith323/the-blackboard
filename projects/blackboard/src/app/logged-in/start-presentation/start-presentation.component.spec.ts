import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPresentationComponent } from './start-presentation.component';

describe('StartPresentationComponent', () => {
  let component: StartPresentationComponent;
  let fixture: ComponentFixture<StartPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
