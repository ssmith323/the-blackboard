import firebase from 'firebase';

import { AuthService, User } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  const auth = jasmine.createSpyObj([
    'createUserWithEmailAndPassword',
    'signInWithEmailAndPassword',
    'signOut',
    'currentUser',
  ]);
  const userMock = jasmine.createSpyObj([
    'updateProfile',
    'sendEmailVerification',
  ]);
  userMock.updateProfile.and.returnValue(Promise.resolve());
  userMock.sendEmailVerification.and.returnValue(Promise.resolve());

  auth.signInWithEmailAndPassword.and.returnValue(
    Promise.resolve({ user: userMock }),
  );
  auth.currentUser = Promise.resolve({ displayName: 'test' });

  auth.createUserWithEmailAndPassword.and.returnValue(
    Promise.resolve({ user: userMock }),
  );

  beforeEach(() => {
    service = new AuthService(auth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('createUser', () => {
    it('should create user', async () => {
      let user: User = {
        email: 'test@accenture.com',
        password: 'password123',
        firstName: 'Test',
        lastName: 'User',
      };

      await service.createUser(user);

      expect(auth.createUserWithEmailAndPassword).toHaveBeenCalledWith(
        'test@accenture.com',
        'password123',
      );
      expect(userMock.sendEmailVerification).toHaveBeenCalled();
      expect(userMock.updateProfile).toHaveBeenCalledWith({
        displayName: 'Test User',
      });
    });
  });

  describe('signIn', () => {
    it('should signIn user', async () => {
      await service.signIn('test', 'password');

      expect(auth.signInWithEmailAndPassword).toHaveBeenCalledWith(
        'test',
        'password',
      );
    });
  });

  describe('signout', () => {
    it('should signout user', async () => {
      await service.signout();

      expect(auth.signOut).toHaveBeenCalledWith();
    });
  });

  describe('getUser', () => {
    it('should get user from the auth', async () => {
      const actual = await service.getUser();

      expect(actual).toEqual({ displayName: 'test' } as firebase.User);
    });

    it('should get user from the auth', async () => {
      await service.signIn('test', 'test');

      const actual = await service.getUser();

      expect(actual).toBe(userMock);
    });
  });
});
