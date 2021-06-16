import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { PresentationService } from '../../services/presentation.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent {
  videoProvided: boolean;
  safeURL: SafeResourceUrl;
  secondCountdown!: Observable<number>;

  constructor(pService: PresentationService, private _sanitizer: DomSanitizer) {
    this.videoProvided = !!pService.youtubeLink;
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${pService.youtubeLink}`,
    );
  }
}
