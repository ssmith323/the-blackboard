import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { take } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { TalkingpointService } from '../services/talkingpoint.service';

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanActivate {
  tpUserId: any;
  user: any;
  constructor(private auth: AuthService, private tpService: TalkingpointService, private router: Router) {};
  
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      this.tpService.getByKey(route.params.id, route.params.key)
      .pipe(take(1))
      .subscribe((tp) => {
        this.tpUserId = tp?.userId;
      });
      this.user = await this.auth.getUser();
      if (this.tpUserId != this.user.uid) {
        return this.router.parseUrl('/view/' + route.params.id)
      }
    return true;
  }
  
  
}
