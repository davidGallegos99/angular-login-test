import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from '../../services/sign-in-service';
import { Input } from '../../../../../shared/components/input/input';

@Component({
  selector: 'app-sign-in-form',
  imports: [ReactiveFormsModule, Input],
  template: `
    <div class="login-container">
      <h2>Login</h2>
      <form [formGroup]="service.formGroup">
        <app-input
          [label]="'Email'"
          type="email"
          placeholder="ejemplo@correo.com"
          [control]="service.form.email"
        />

        <app-input
          [label]="'Password'"
          type="password"
          placeholder="**********"
          [control]="service.form.password"
        />

        <button (click)="onSubmit()" type="button">Ingresar</button>
      </form>
    </div>
  `,
  styleUrl: './sign-in-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInForm {
  router = inject(Router);
  service = inject(SignInService);
  errorMessage: string = '';

  onSubmit(): void {
    if (this.service.formGroup.invalid) {
      this.service.formGroup.markAllAsTouched();
      return;
    }
    const user: any = {};

    const { email, password } = user;

    if (email && password) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Email o contraseña incorrectos';
    }
  }
}
