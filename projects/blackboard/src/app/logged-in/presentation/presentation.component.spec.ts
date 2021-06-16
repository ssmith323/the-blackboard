import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { PresentationService } from '../services/presentation.service';
import { PresentationComponent } from './presentation.component';

describe('PresentationComponent', () => {
  let component: PresentationComponent;
  let fixture: ComponentFixture<PresentationComponent>;

  const presentationService = { presentor: 'Stephen', date: '1/1/1111' };

  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresentationComponent],
      imports: [RouterTestingModule, MatIconModule],
      providers: [
        { provide: PresentationService, useValue: presentationService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should manage the state of the app', () => {
    expect(component.order).toEqual([
      'countdown',
      'new-faces',
      'interestings',
      'events',
      'helps',
      'shout-outs',
      'strech',
    ]);
  });

  it('should hide the go back slide', () => {
    expect(fixture.debugElement.query(By.css('#goBackButton'))).toBeNull();
  });

  it('should show the next slide', () => {
    expect(
      fixture.debugElement.query(By.css('#nextSlideButton')),
    ).toBeDefined();
  });

  it('should show stop presentation and stop when clicked', () => {
    const spy = spyOn(router, 'navigateByUrl');
    const button = fixture.debugElement.query(
      By.css('#stopPresentationButton'),
    );
    button.nativeElement.click();

    expect(spy).toHaveBeenCalledWith('/home');
  });

  it('should show the next presentation when clicked', () => {
    const spy = spyOn(router, 'navigateByUrl');
    const button = fixture.debugElement.query(By.css('#nextSlideButton'));
    button.nativeElement.click();

    expect(spy).toHaveBeenCalledWith('/presentation/new-faces');
  });

  it('should show the previous presentation when clicked', () => {
    const spy = spyOn(router, 'navigateByUrl');
    component.place = 3;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('#goBackButton'));
    button.nativeElement.click();

    expect(spy).toHaveBeenCalledWith('/presentation/interestings');
  });

  it('should hide the next button at the end', () => {
    component.place = 6;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#nextSlideButton'))).toBeNull();
  });

  it('should have a presentor name', () => {
    expect(component.presentor).toBe('Stephen');
  });

  it('should have a date', () => {
    expect(component.date).toBe('1/1/1111');
  });
});
