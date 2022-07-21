import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailCheck(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = /.*@.*\.[a-z]{3}$/.test(control.value);
    return !forbidden ? { emailCheck: true } : null;
  };
}
