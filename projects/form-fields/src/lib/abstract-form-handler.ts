import { FormControl, FormGroup } from '@angular/forms';

export abstract class AbstractFormHandler {
  form!: FormGroup;
  getControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  abstract submit(): void;
}
