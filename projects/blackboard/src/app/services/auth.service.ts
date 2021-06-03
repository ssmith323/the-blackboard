import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  user: any;

  constructor(private auth: AngularFireAuth) {}

  async ngOnInit(): Promise<void> {
    this.user = await this.auth.currentUser;
  }

  async createUser(user: User): Promise<void> {
    await this.auth.createUserWithEmailAndPassword(user.email, user.password);
    await this.signIn(user.email, user.password);
    if (this.user) {
      await this.user.updateProfile({
        displayName: `${user.firstName} ${user.lastName}`,
      });
    }
  }

  async signIn(email: string, password: string): Promise<void> {
    const user = await this.auth.signInWithEmailAndPassword(email, password);
    this.user = user.user;
  }

  async signout(): Promise<void> {
    await this.auth.signOut();
  }
}

export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
