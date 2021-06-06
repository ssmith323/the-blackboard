import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  timer!: Observable<number>;
  constructor() {}

  ngOnInit(): void {
    const today = new Date();
    today.setHours(9);
    today.setMinutes(30);
    this.timer = interval(1000).pipe(
      map(() => Math.floor((today.getTime() - new Date().getTime()) / 1000)),
    );
  }
}
