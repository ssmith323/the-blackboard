import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetationComponent } from './presetation.component';

describe('PresetationComponent', () => {
  let component: PresetationComponent;
  let fixture: ComponentFixture<PresetationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresetationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresetationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
