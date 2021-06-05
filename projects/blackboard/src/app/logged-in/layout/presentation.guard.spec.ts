import { TestBed } from '@angular/core/testing';

import { PresentationGuard } from './presentation.guard';

describe('PresentationGuard', () => {
  let guard: PresentationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PresentationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
