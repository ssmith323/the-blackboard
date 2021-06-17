import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { map } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { TalkingpointService } from '../services/talkingpoint.service';

@Injectable({
  providedIn: 'root',
})
export class EditGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private tpService: TalkingpointService,
    private router: Router,
  ) {}

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean | UrlTree> {
    const user = await this.auth.getUser();
    return this.tpService
      .getByKey(route.params.id, route.params.key)
      .pipe(
        map((tp) => tp?.userId === user.uid),
        map(
          (allowed) =>
            allowed || this.router.parseUrl('/view/' + route.params.id),
        ),
      )
      .toPromise();
  }
}
