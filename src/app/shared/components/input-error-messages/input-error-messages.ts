import { Component, input, signal, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-error-messages',
  imports: [],
  template: `
    @for(err of controlErrors; track err) { @if(control().touched &&
    control().hasError(err) && control().invalid) {
    <small class="error-message">{{ errorsMap()[err] }}</small>
    } }
  `,
  styleUrl: './input-error-messages.css',
})
export class InputErrorMessages implements OnInit {
  control = input.required<FormControl>();

  errorsMap = signal<Record<string, string>>({
    required: 'Este Campo es requerido',
    email: 'debe ser un email',
    minlength: `Este campo debe contener al menos`,
  });

  get controlErrors() {
    return Object.keys({ ...this.control().errors });
  }

  ngOnInit(): void {
    // this.control().valueChanges.subscribe({
    //   // next: (va) => console.log(this.control().errors),
    // });
  }
}
