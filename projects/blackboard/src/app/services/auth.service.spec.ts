import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthService, User } from './auth.service';
import { of, Observable } from 'rxjs';

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

  it('should create user', async () => {
    let user: User = {
      email: 'test@accenture.com',
      password: 'password123',
      firstName: 'Test',
      lastName: 'User'
    };

    service.createUser(user);

    spyOn(service, 'signIn').and.callFake;

    await Promise.resolve();

    expect(auth.createUserWithEmailAndPassword).toHaveBeenCalledWith(user.email, user.password);
    expect(service.signIn).toHaveBeenCalledWith(user.email, user.password);
  });
});
