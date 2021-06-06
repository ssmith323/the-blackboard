import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strech',
  templateUrl: './strech.component.html',
  styleUrls: ['./strech.component.scss'],
})
export class StrechComponent implements OnInit {
  streches = ['Arms', 'Fingers', 'Neck'];
  todaysStrech!: string;
  constructor() {}

  ngOnInit(): void {
    this.todaysStrech =
      this.streches[Math.floor(Math.random() * 1000) % this.streches.length];
  }
}
