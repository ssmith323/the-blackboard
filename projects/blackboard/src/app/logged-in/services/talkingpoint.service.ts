import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TalkingpointService {
  constructor(private db: AngularFireDatabase) {}

  save(value: TalkingPoint) {
    this.db.list<TalkingPoint>(`talkingpoints/${value.type}`).push(value);
  }

  getBeforeToday(type: string): Observable<TalkingPoint[]> {
    return this.db
      .list<TalkingPoint>(`/talkingpoints/${type}`, (ref) =>
        ref.orderByChild('removalDate').startAt(new Date().getTime()),
      )
      .valueChanges();
  }
}

export interface TalkingPoint {
  title: string;
  type: string;
  removalDate: number;
  name: string;
  description: string;
}
