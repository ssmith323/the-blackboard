import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailCheck(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = /.*@accenture.com$/.test(control.value);
    return !forbidden ? { emailCheck: true } : null;
  };
}
