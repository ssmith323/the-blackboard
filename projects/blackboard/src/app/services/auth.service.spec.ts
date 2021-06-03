import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  const auth = jasmine.createSpyObj([
    'createUserWithEmailAndPassword',
    'signInWithEmailAndPassword',
    'signOut',
  ]);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AngularFireAuth, useValue: auth }],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
