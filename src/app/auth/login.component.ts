import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  onSubmit(): void {
    const user: any = {};

    const { email, password } = user;

    if (email && password) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Email o contraseña incorrectos';
    }
  }
}
