import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AbstractFormFieldComponent } from '../abstract-form-field.component';

@Component({
  selector: 'ff-datepicker',
  template: '<div [id]="label"></div>',
})
export class DatepickerComponent extends AbstractFormFieldComponent {}

@Component({
  selector: 'ff-input',
  template: '<div [id]="label"></div>',
})
export class InputComponent extends AbstractFormFieldComponent {}

@Component({
  selector: 'ff-textarea',
  template: '<div [id]="label"></div>',
})
export class TextAreaComponent extends AbstractFormFieldComponent {}

@Component({
  selector: 'ff-slider',
  template: '<div [id]="label"></div>',
})
export class SliderComponent extends AbstractFormFieldComponent {}

@Component({
  selector: 'ff-select',
  template: '<div [id]="label"></div>',
})
export class SelectComponent extends AbstractFormFieldComponent {
  @Input() options: any;
}

@Component({
  selector: 'ff-submit',
  template: '<button type="submit">{{text}}</button>',
})
export class SubmitComponent {
  @Input() form!: FormGroup;
  @Input() text = 'Submit';
}

const components = [
  InputComponent,
  SelectComponent,
  DatepickerComponent,
  SubmitComponent,
  SliderComponent,
  TextAreaComponent,
];

@NgModule({
  declarations: [components],
  exports: [ReactiveFormsModule, components],
  imports: [CommonModule, ReactiveFormsModule],
})
export class FormFieldTestingModule {}
