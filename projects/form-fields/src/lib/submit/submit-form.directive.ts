import { Directive, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[ffSubmitForm]',
})
export class SubmitFormDirective {
  @Input() ffSubmitForm!: FormGroup;

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    for (const control in this.ffSubmitForm.controls) {
      if (this.ffSubmitForm.controls.hasOwnProperty(control)) {
        this.ffSubmitForm.controls[control].markAsTouched();
      }
    }
    if (!this.ffSubmitForm.valid) {
      event.preventDefault();
    }
  }
}
