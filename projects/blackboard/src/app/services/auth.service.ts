import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user!: firebase.User;

  constructor(private auth: AngularFireAuth) {}

  async createUser(user: User): Promise<void> {
    let userCredentials = await this.auth.createUserWithEmailAndPassword(
      user.email,
      user.password,
    );
    await userCredentials.user?.updateProfile({
      displayName: `${user.firstName} ${user.lastName}`,
    });
    userCredentials.user?.sendEmailVerification();
  }

  async signIn(email: string, password: string): Promise<void> {
    const userCredential = await this.auth.signInWithEmailAndPassword(
      email,
      password,
    );
    if (userCredential && userCredential.user) {
      this.user = userCredential.user;
    }
  }

  async signout(): Promise<void> {
    await this.auth.signOut();
  }

  async getUser(): Promise<firebase.User> {
    return this.user || (await this.auth.currentUser);
  }
}

export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
