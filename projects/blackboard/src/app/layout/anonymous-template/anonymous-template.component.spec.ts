import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';

import { AnonymousTemplateComponent } from './anonymous-template.component';

describe('AnonymousTemplateComponent', () => {
  let component: AnonymousTemplateComponent;
  let fixture: ComponentFixture<AnonymousTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnonymousTemplateComponent],
      imports: [MatToolbarModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
