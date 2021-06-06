import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { PresentationService } from '../services/presentation.service';

@Component({
  selector: 'app-start-presentation',
  templateUrl: './start-presentation.component.html',
  styleUrls: ['./start-presentation.component.scss'],
})
export class StartPresentationComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private pService: PresentationService,
  ) {
    this.auth.getUser().then(({ displayName }) => {
      this.form = this.fb.group({
        presentor: [
          { value: displayName, disabled: true },
          Validators.required,
        ],
        date: [{ value: this.getDate(), disabled: true }, Validators.required],
        youtubeLink: '',
      });
    });
  }

  ngOnInit(): void {}

  start() {
    const presentation = this.form.value;
    presentation.presentor = this.form.get('presentor')?.value;
    presentation.date = this.form.get('date')?.value;
    this.pService.setValues(presentation);
    this.router.navigateByUrl('presentation');
  }

  private getDate(): string {
    return new Date().toLocaleString().split(',')[0];
  }
}
