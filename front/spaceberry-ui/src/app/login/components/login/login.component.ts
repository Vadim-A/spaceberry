import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  form = this.fb.group({
    login: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  error?: string;

  submit() {
    if (this.form.valid) {
      const loginResult = this.authService.login(
        this.form.get('login')?.value,
        this.form.get('password')?.value
      );
      if (loginResult) {
        this.router.navigate(['/']);
      } else {
        this.error = 'Неверный логин/пароль';
      }
    }
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
}
