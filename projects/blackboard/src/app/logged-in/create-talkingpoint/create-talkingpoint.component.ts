import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AbstractFormHandler } from 'projects/form-fields/src/lib/abstract-form-handler';
import { BasicOption } from 'projects/form-fields/src/public-api';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import {
  TalkingPoint,
  TalkingpointService,
} from '../services/talkingpoint.service';

@Component({
  selector: 'app-create-talkingpoint',
  templateUrl: './create-talkingpoint.component.html',
  styleUrls: ['./create-talkingpoint.component.scss'],
})
export class CreateTalkingpointComponent
  extends AbstractFormHandler
  implements OnInit
{
  types: BasicOption<any>[];
  params: Params;
  editItem: boolean;
  talkingPoint$!: Observable<TalkingPoint>;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private talkingpointService: TalkingpointService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    super();
    this.params = activatedRoute.snapshot.params;
    this.editItem = !!this.params.key;
    this.form = this.fb.group({
      title: ['', Validators.required],
      type: [{ value: '', disabled: this.editItem }, Validators.required],
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
    if (this.editItem) {
      this.talkingpointService
        .getByKey(this.params.id, this.params.key)
        .subscribe((tp) => {
          this.getControl('title')?.setValue(tp?.title);
          this.getControl('type')?.setValue(tp?.type);
          this.getControl('description')?.setValue(tp?.description);
          this.form
            .get('removalDate')
            ?.setValue(new Date(tp?.removalDate || 0));
        });
    }
    this.auth.getUser().then((user) => {
      this.getControl('name')?.setValue(user.displayName);
      this.getControl('userId')?.setValue(user.uid);
    });
  }

  submit() {
    const talkingpoint: TalkingPoint = this.form.getRawValue();
    talkingpoint.removalDate = new Date(talkingpoint.removalDate).getTime();
    if (this.editItem) {
      this.talkingpointService.update(
        this.params.key,
        talkingpoint.type,
        talkingpoint,
      );
    } else {
      this.talkingpointService.save(talkingpoint);
    }
    this.router.navigateByUrl('/home');
  }
}
