import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PresentationService } from '../services/presentation.service';
import { PresentationComponent } from './presentation.component';

describe('PresentationComponent', () => {
  let component: PresentationComponent;
  let fixture: ComponentFixture<PresentationComponent>;

  const presentationService = { presentor: 'Stephen', date: '1/1/1111' };

  let router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresentationComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: PresentationService, useValue: presentationService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
