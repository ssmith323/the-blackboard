import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { PresentationService } from '../services/presentation.service';

@Injectable({
  providedIn: 'root',
})
export class PresentationGuard implements CanActivate {
  constructor(private pService: PresentationService, private router: Router) {}
  canActivate(): boolean | UrlTree {
    if (!this.pService.presentor) {
      return this.router.parseUrl('/setup');
    }
    return true;
  }
}
