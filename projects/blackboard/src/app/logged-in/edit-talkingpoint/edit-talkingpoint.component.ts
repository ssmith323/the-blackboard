import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../services/auth.service';
import { TalkingPoint, TalkingpointService } from '../services/talkingpoint.service';
import { BasicOption } from 'projects/form-fields/src/public-api';


@Component({
  selector: 'app-edit-talkingpoint',
  templateUrl: './edit-talkingpoint.component.html',
  styleUrls: ['./edit-talkingpoint.component.scss']
})
export class EditTalkingpointComponent implements OnInit {
  form: FormGroup;
  types: BasicOption<any>[];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private talkingpointService: TalkingpointService,
    private router: Router) { 
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
    this.auth.getUser().then((user) => {
      this.form.get('name')?.setValue(user.displayName);
      this.form.get('userId')?.setValue(user.uid);
    });
  }

  submit() {
    const talkingpoint: TalkingPoint = this.form.value;
    talkingpoint.name = this.form.get('name')?.value;
    talkingpoint.removalDate = new Date(talkingpoint.removalDate).getTime();
    this.talkingpointService.update(talkingpoint.userId, talkingpoint.type, talkingpoint);
    this.router.navigateByUrl('/home');
  }

}
