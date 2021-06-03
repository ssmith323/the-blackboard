import { TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';

import { TalkingpointService } from './talkingpoint.service';

describe('TalkingpointService', () => {
  let service: TalkingpointService;

  const db = jasmine.createSpyObj(['list']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AngularFireDatabase, useValue: db }],
    });
    service = TestBed.inject(TalkingpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
