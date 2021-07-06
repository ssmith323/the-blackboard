import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

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

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    return from(this.auth.getUser()).pipe(
      mergeMap((user) =>
        this.tpService
          .getByKey(route.params.id, route.params.key)
          .pipe(
            map(
              (tp) =>
                tp?.userId === user.uid || this.router.parseUrl('/view/type'),
            ),
          ),
      ),
    );
  }
}
