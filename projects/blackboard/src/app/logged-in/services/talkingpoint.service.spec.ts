import { TestBed } from '@angular/core/testing';

import { TalkingpointService } from './talkingpoint.service';

describe('TalkingpointService', () => {
  let service: TalkingpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalkingpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
