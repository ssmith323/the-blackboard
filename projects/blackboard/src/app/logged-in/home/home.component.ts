import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(private auth: AuthService) {}

  async ngOnInit(): Promise<void> {
    this.user = await this.auth.getUser();
  }
}
