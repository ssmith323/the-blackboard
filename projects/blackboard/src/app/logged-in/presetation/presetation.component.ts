import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PresetationService } from '../services/presetation.service';

@Component({
  selector: 'app-presetation',
  templateUrl: './presetation.component.html',
  styleUrls: ['./presetation.component.scss'],
})
export class PresetationComponent implements OnInit {
  presentor: string;
  date: string;
  order = [
    'countdown',
    'new-faces',
    'interestings',
    'events',
    'shout-outs',
    'strech',
  ];
  place = 0;

  constructor(presentationService: PresetationService, private router: Router) {
    this.presentor = presentationService.presentor;
    this.date = presentationService.date;
  }

  ngOnInit(): void {}

  navigate(direction: number) {
    this.place = this.place + direction;
    this.router.navigateByUrl(`/presentation/${this.order[this.place]}`);
  }
}
