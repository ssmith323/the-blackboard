import { TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';
import { of } from 'rxjs';

import { TalkingPoint, TalkingpointService } from './talkingpoint.service';

describe('TalkingpointService', () => {
  let service: TalkingpointService;

  const db = jasmine.createSpyObj(['list']);
  db.list.and.returnValue({ push: () => {}, valueChanges: () => of() });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AngularFireDatabase, useValue: db }],
    });
    service = TestBed.inject(TalkingpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('save', () => {
    it('should save', () => {
      service.save({ name: 'Stephen' } as TalkingPoint);

      expect(db.list).toHaveBeenCalledWith('talkingpoints');
    });
  });
});
