import { Component, computed, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isAuthenticated } from '../../../signals/shared/app.signals';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly _formBuilder: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);

  isUserLoggedIn = computed(() => isAuthenticated());

  loginForm: FormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  get isEmailRequired(): boolean {
    const emailControl = this.loginForm.get('email');
    return emailControl ? emailControl.hasError('required') && emailControl.touched : false;
  }

  get isEmailInvalid(): boolean {
    const emailControl = this.loginForm.get('email');
    return emailControl ? emailControl.hasError('email') && emailControl.touched : false;
  }

  get isPasswordRequired(): boolean {
    const passwordControl = this.loginForm.get('password');
    return passwordControl ? passwordControl.hasError('required') && passwordControl.touched : false;
  }
  
  onSubmit(): void {
    if(this.loginForm.valid) {
      console.log('Usuario ingresado correctamente', this.loginForm.value);
      isAuthenticated.set(true);
      this._router.navigate(['/Edit']);
    }
    else
    {
      console.log('Form is invalid');
    }
  }
}