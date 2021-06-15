import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { TalkingPoint } from '../services/talkingpoint.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item!: TalkingPoint;
  isEditable = false;

  constructor(private auth: AuthService) {
  }

  async ngOnInit(): Promise<void> {
    const user = await this.auth.getUser();
    this.isEditable = this.item.userId === user.uid; 
  }
}
