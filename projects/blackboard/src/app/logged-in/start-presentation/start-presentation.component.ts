import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractFormHandler } from 'projects/form-fields/src/lib/abstract-form-handler';

import { AuthService } from '../../services/auth.service';
import { PresentationService } from '../services/presentation.service';

@Component({
  selector: 'app-start-presentation',
  templateUrl: './start-presentation.component.html',
  styleUrls: ['./start-presentation.component.scss'],
})
export class StartPresentationComponent
  extends AbstractFormHandler
  implements OnInit
{
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private pService: PresentationService,
  ) {
    super();
    this.form = this.fb.group({});
  }

  async ngOnInit(): Promise<void> {
    const { displayName } = await this.auth.getUser();

    this.form = this.fb.group({
      presentor: [{ value: displayName, disabled: true }, Validators.required],
      date: [{ value: this.getDate(), disabled: true }, Validators.required],
      youtubeLink: '',
    });
  }

  submit() {
    const presentation = this.form.getRawValue();
    this.pService.setValues(presentation);
    this.router.navigateByUrl('presentation');
  }

  private getDate(): string {
    return new Date().toLocaleString().split(',')[0];
  }
}
