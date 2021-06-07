import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthService, User } from './auth.service';

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

  it('should create user', () => {
    let user: User = {
      email: 'test@accenture.com',
      password: 'password123',
      firstName: 'Test',
      lastName: 'User'
    };

    service.createUser(user);

    expect(auth.createUserWithEmailAndPassword).toHaveBeenCalledOnceWith(user.email, user.password);
  });
});
