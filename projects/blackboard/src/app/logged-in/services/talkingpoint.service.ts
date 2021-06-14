import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TalkingpointService {
  constructor(private db: AngularFireDatabase) {}

  save(value: TalkingPoint): void {
    this.db.list<TalkingPoint>(`talkingpoints/${value.type}`).push(value);
  }

  getByKey(type: string, key: string): Observable<TalkingPoint | null> {
    return this.db
      .object<TalkingPoint>(`talkingpoints/${type}/${key}`)
      .valueChanges();
  }

  getAll(type: string): Observable<TalkingPoint[]> {
    return this.db
      .list<TalkingPoint>(`/talkingpoints/${type}`)
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map(
            (c) => ({ key: c.payload.key, ...c.payload.val() } as TalkingPoint),
          ),
        ),
      );
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

  update(id: string, type: string, value: TalkingPoint): Promise<void> {
    return this.db.list<TalkingPoint>(`talkingpoints/${type}`).set(id, value);
  }
}

export interface TalkingPoint {
  key?: string;
  title: string;
  type: string;
  removalDate: number;
  name: string;
  description: string;
  userId?: string;
}
