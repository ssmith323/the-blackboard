import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { PresetationService } from '../services/presetation.service';

@Injectable({
  providedIn: 'root',
})
export class PresentationGuard implements CanActivate {
  constructor(private pService: PresetationService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | UrlTree {
    if (!this.pService.presentor) {
      return this.router.parseUrl('/setup');
    }
    return true;
  }
}
