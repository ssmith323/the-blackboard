import { Component, OnInit } from '@angular/core';

import { AbstractFormFieldComponent } from '../abstract-form-field.component';

@Component({
  selector: 'ff-textarea',
  templateUrl: './textarea.component.html',
})
export class TextareaComponent
  extends AbstractFormFieldComponent
  implements OnInit
{
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.id = this.getId();
  }
}
