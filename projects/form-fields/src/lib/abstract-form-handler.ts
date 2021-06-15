import { FormControl, FormGroup } from '@angular/forms';

export class AbstractFormHandler {
  form!: FormGroup;
  getControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }
}
