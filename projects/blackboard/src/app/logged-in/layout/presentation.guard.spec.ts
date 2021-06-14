import { UrlTree } from '@angular/router';

import { PresentationService } from '../services/presentation.service';
import { PresentationGuard } from './presentation.guard';

describe('PresentationGuard', () => {
  let guard: PresentationGuard;

  const pService = { presentor: '' } as PresentationService;
  const router = jasmine.createSpyObj(['parseUrl']);
  router.parseUrl.and.returnValue(new UrlTree());

  beforeEach(() => {
    guard = new PresentationGuard(pService, router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('canActivate', () => {
    it('should stay on the page', () => {
      guard = new PresentationGuard(pService, router);
      const actual = guard.canActivate();

      expect(actual).toBeTrue();
    });

    it('should stay on the page', () => {
      pService.presentor = 'Stephen';
      guard = new PresentationGuard(pService, router);
      const actual = guard.canActivate();

      expect(router.parseUrl).toHaveBeenCalledWith('/setup');
    });
  });
});
