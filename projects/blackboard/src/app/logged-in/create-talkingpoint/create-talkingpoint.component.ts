import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BasicOption } from 'projects/form-fields/src/public-api';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-create-talkingpoint',
  templateUrl: './create-talkingpoint.component.html',
  styleUrls: ['./create-talkingpoint.component.scss'],
})
export class CreateTalkingpointComponent implements OnInit {
  form: FormGroup;
  types: BasicOption<any>[];

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      description: '',
      removalDate: ['', Validators.required],
      name: [{ value: '', disabled: true }, Validators.required],
    });

    this.types = [
      { label: 'New Face', value: 'new_face' },
      { label: 'Interesting', value: 'intesting' },
      { label: 'Help', value: 'help' },
      { label: 'Event', value: 'event' },
      { label: 'Shout Out', value: 'shoutout' },
    ];
  }

  ngOnInit(): void {
    this.auth
      .getUser()
      .then(({ displayName }) => this.form.get('name')?.setValue(displayName));
  }

  submit() {}
}
