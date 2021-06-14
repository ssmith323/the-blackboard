import { TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';
import { of } from 'rxjs';

import { TalkingPoint, TalkingpointService } from './talkingpoint.service';

describe('TalkingpointService', () => {
  let service: TalkingpointService;

  const db = jasmine.createSpyObj(['list', 'object']);
  db.list.and.returnValue({ push: () => {}, valueChanges: () => of() });
  db.object.and.returnValue({ push: () => {}, valueChanges: () => of() });

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
      service.save({ name: 'Stephen', type: 'event' } as TalkingPoint);

      expect(db.list).toHaveBeenCalledWith('talkingpoints/event');
    });
  });

  describe('getByKey', () => {
    it('should get a record', () => {
      service.getByKey('Stephen', 'event');

      expect(db.object).toHaveBeenCalledWith('talkingpoints/Stephen/event');
    });
  });
});
