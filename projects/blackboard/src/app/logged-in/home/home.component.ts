import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user!: firebase.User;

  constructor(private auth: AuthService) {}

  async ngOnInit(): Promise<void> {
    this.user = await this.auth.getUser();
  }
}
