import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicOption } from 'projects/form-fields/src/public-api';

import { AuthService } from '../../services/auth.service';
import { TalkingPoint, TalkingpointService } from '../services/talkingpoint.service';

@Component({
  selector: 'app-create-talkingpoint',
  templateUrl: './create-talkingpoint.component.html',
  styleUrls: ['./create-talkingpoint.component.scss'],
})
export class CreateTalkingpointComponent implements OnInit {
  form: FormGroup;
  types: BasicOption<any>[];
  params: any;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private talkingpointService: TalkingpointService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.params = activatedRoute.snapshot.params;
    this.form = this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      description: '',
      removalDate: ['', Validators.required],
      name: [{ value: '', disabled: true }, Validators.required],
      userId: '',
    });

    this.types = [
      { label: 'New Face', value: 'new-faces' },
      { label: 'Interesting', value: 'interestings' },
      { label: 'Help', value: 'helps' },
      { label: 'Event', value: 'events' },
      { label: 'Shout Out', value: 'shout-outs' },
    ];
  }

  ngOnInit(): void {
    if (this.params.key) {
      this.talkingpointService
        .getByKey(this.params.id, this.params.key)
        .subscribe((tp) => {
          this.form.get('title')?.setValue(tp?.title);
          this.form.get('type')?.setValue(tp?.type);
          this.form.get('description')?.setValue(tp?.description);
          this.form
            .get('removalDate')
            ?.setValue(new Date(tp?.removalDate || 0));
        });
    }
    this.auth.getUser().then((user) => {
      this.form.get('name')?.setValue(user.displayName);
      this.form.get('userId')?.setValue(user.uid);
    });
  }

  submit() {
    const talkingpoint: TalkingPoint = this.form.value;
    talkingpoint.name = this.form.get('name')?.value;
    talkingpoint.removalDate = new Date(talkingpoint.removalDate).getTime();
    if (this.params.key) {
      this.talkingpointService.update(
        this.params.key,
        talkingpoint.type,
        talkingpoint,
      );
      this.router.navigateByUrl('/home');
    } else { 
    this.talkingpointService.save(talkingpoint);
    this.router.navigateByUrl('/home');
    }
  }
}
