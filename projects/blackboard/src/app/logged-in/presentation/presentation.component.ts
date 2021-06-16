import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PresentationService } from '../services/presentation.service';

@Component({
  selector: 'app-presetation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent {
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

  constructor(
    presentationService: PresentationService,
    private router: Router,
  ) {
    this.presentor = presentationService.presentor;
    this.date = presentationService.date;
  }

  navigate(direction: number) {
    this.place = this.place + direction;
    this.router.navigateByUrl(`/presentation/${this.order[this.place]}`);
  }

  stop(): void {
    this.router.navigateByUrl('/home');
  }
}
