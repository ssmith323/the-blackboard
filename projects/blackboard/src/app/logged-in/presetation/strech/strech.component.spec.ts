import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrechComponent } from './strech.component';

describe('StrechComponent', () => {
  let component: StrechComponent;
  let fixture: ComponentFixture<StrechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
