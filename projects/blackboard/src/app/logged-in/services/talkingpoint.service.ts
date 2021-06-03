import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TalkingpointService {
  constructor(private db: AngularFireDatabase) {}

  save(value: TalkingPoint) {
    this.db.list<TalkingPoint>('talkingpoints').push(value);
  }

  getNewFaces(): Observable<TalkingPoint[]> {
    return this.getByType('new_faces');
  }

  getInterestings(): Observable<TalkingPoint[]> {
    return this.getByType('interestings');
  }

  private getByType(type: string): Observable<TalkingPoint[]> {
    return this.db
      .list<TalkingPoint>('/talkingpoints', (ref) =>
        ref.orderByChild('type').equalTo(type),
      )
      .valueChanges();
  }
}

export interface TalkingPoint {
  title: string;
  type: string;
  removalDate: string;
  name: string;
  description: string;
}
