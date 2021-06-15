import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { TalkingPoint, TalkingpointService } from '../services/talkingpoint.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss'],
})
export class ViewAllComponent implements OnInit {
  talkingPoints!: Observable<TalkingPoint[]>;
  name!: Observable<string>;

  constructor(
    private tpService: TalkingpointService,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.name = this.activeRoute.params.pipe(map((param) => param.id));
    this.talkingPoints = this.name.pipe(
      mergeMap((id) => this.tpService.getAll(id)),
    );
  }
}
