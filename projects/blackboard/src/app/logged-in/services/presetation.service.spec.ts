import { TestBed } from '@angular/core/testing';

import { PresetationService } from './presetation.service';

describe('PresetationService', () => {
  let service: PresetationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresetationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
