import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputErrorMessages } from '../input-error-messages/input-error-messages';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, InputErrorMessages],
  template: `
    <div class="form-group">
      <label>{{ label() }}</label>
      <input
        [type]="type()"
        [formControl]="control()"
        [placeholder]="placeholder()"
      />
      <app-input-error-messages [control]="control()" />
    </div>
  `,
  styleUrl: './input.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Input {
  control = input.required<FormControl>();
  label = input.required<string>();
  placeholder = input<string>('Ingrese un valor');
  type = input<string>('text');
}
