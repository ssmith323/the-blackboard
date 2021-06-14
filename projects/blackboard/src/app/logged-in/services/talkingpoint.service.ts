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

  getAll(type: string): Observable<TalkingPoint[]> {
    return this.db.list<TalkingPoint>(`/talkingpoints/${type}`).valueChanges();
  }

  getBeforeToday(type: string): Observable<TalkingPoint[]> {
    const bod = new Date();
    bod.setHours(0, 0, 0, 0);
    return this.db
      .list<TalkingPoint>(`/talkingpoints/${type}`, (ref) =>
        ref.orderByChild('removalDate').startAt(bod.getTime()),
      )
      .valueChanges();
  }

  update(id: string, type: string, value: TalkingPoint) {
    return this.db.list<TalkingPoint>(`talkingpoints/${type}`).update(id, value);
  }

}

export interface TalkingPoint {
  title: string;
  type: string;
  removalDate: number;
  name: string;
  description: string;
  userId?: string;
}
