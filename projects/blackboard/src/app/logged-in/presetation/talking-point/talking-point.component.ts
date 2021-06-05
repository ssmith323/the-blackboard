import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TalkingPoint, TalkingpointService } from '../../services/talkingpoint.service';

@Component({
  selector: 'app-talking-point',
  templateUrl: './talking-point.component.html',
  styleUrls: ['./talking-point.component.scss'],
})
export class TalkingPointComponent implements OnInit {
  talkingPoints!: Observable<Observable<TalkingPoint[]>>;

  constructor(
    private activeRoute: ActivatedRoute,
    private tpService: TalkingpointService,
  ) {}

  ngOnInit(): void {
    this.talkingPoints = this.activeRoute.params.pipe(
      map((param) => param.id),
      map((id) => this.tpService.getBeforeToday(id)),
    );
  }
}
