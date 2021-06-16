import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';

import { EditGuard } from './edit.guard';

describe('EditGuard', () => {
  let guard: EditGuard;

  const auth = jasmine.createSpyObj(['getUser']);
  auth.getUser.and.returnValue(Promise.resolve({ uid: 1 }));
  const tpService = jasmine.createSpyObj(['getByKey']);
  const router = jasmine.createSpyObj(['parseUrl']);

  beforeEach(() => {
    guard = new EditGuard(auth, tpService, router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('canActivate', () => {
    it('should navigate to the list of all types', async () => {
      tpService.getByKey.and.returnValue(of({ userId: 2 }));

      const route = new ActivatedRouteSnapshot();
      route.params = { id: 'type', key: '123' };

      await guard.canActivate(route);

      expect(router.parseUrl).toHaveBeenCalledOnceWith('/view/type');
    });

    it('should allow it', async () => {
      tpService.getByKey.and.returnValue(of({ userId: 1 }));

      const route = new ActivatedRouteSnapshot();
      route.params = { id: 'type', key: '123' };

      const actual = await guard.canActivate(route);

      expect(actual).toBeTrue();
    });
  });
});
