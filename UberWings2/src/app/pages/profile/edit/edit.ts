import { Component, computed, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { isAuthenticated } from '../../../signals/shared/app.signals';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
  private _formBuilder: FormBuilder = inject(FormBuilder);

  
  isUserLoggedIn = computed(() => isAuthenticated());

  ProfileForm: FormGroup = this._formBuilder.group({
    FirstName: ['', [Validators.required, Validators.minLength(3) ,Validators.maxLength(20), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')]],
    LastName: ['', [Validators.required, Validators.minLength(3) ,Validators.maxLength(20), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')]],
    PhoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
    Email: ['', [Validators.required, Validators.email]],
    IDNumber: ['', [Validators.required, Validators.pattern('^[0-9]{13}$')]],
    BirthDate: ['', [Validators.required]],
  });

  get isFirstNameRequired(): boolean {
    const FirstNameControl = this.ProfileForm.get('FirstName');
    return FirstNameControl ? FirstNameControl.hasError('required') && FirstNameControl.touched : false;
  }

  get isFirstNameInvalid(): boolean {
    const FirstNameControl = this.ProfileForm.get('FirstName');
    return FirstNameControl ? FirstNameControl.hasError('pattern') && FirstNameControl.touched && FirstNameControl.dirty : false;
  }

  get isFirstNameShorthLength(): boolean {
    const FirstNameControl = this.ProfileForm.get('FirstName');
    return FirstNameControl ? FirstNameControl.hasError('minlength') && FirstNameControl.touched: false;
  }

  get isFirstNameLongthLength(): boolean {
    const FirstNameControl = this.ProfileForm.get('FirstName');
    return FirstNameControl ? FirstNameControl.hasError('maxlength') && FirstNameControl.touched: false;
  }


  
  get isLastNameRequired(): boolean {
    const LastNameControl = this.ProfileForm.get('LastName');
    return LastNameControl ? LastNameControl.hasError('required') && LastNameControl.touched : false;
  }
  
  get isLastNameInvalid(): boolean {
    const LastNameControl = this.ProfileForm.get('LastName');
    return LastNameControl ? LastNameControl.hasError('pattern') && LastNameControl.touched : false;
  }

  get isLastNameShorthLength(): boolean {
    const LastNameControl = this.ProfileForm.get('LastName');
    return LastNameControl ? LastNameControl.hasError('minlength') && LastNameControl.touched: false;
  }

  get isLastNameLongthLength(): boolean {
    const LastNameControl = this.ProfileForm.get('LastName');
    return LastNameControl ? LastNameControl.hasError('maxlength') && LastNameControl.touched: false;
  }

  get isPhoneNumberRequired(): boolean {
    const PhoneNumberControl = this.ProfileForm.get('PhoneNumber');
    return PhoneNumberControl ? PhoneNumberControl.hasError('required') && PhoneNumberControl.touched : false;
  }

  get isPhoneNumberInvalid(): boolean {
    const PhoneNumberControl = this.ProfileForm.get('PhoneNumber');
    return PhoneNumberControl ? PhoneNumberControl.hasError('pattern') && PhoneNumberControl.touched : false;
  }

  get isEmailRequired(): boolean {
    const EmailControl = this.ProfileForm.get('Email');
    return EmailControl ? EmailControl.hasError('required') && EmailControl.touched : false;
  }

  get isEmailInvalid(): boolean {
    const EmailControl = this.ProfileForm.get('Email');
    return EmailControl ? EmailControl.hasError('email') && EmailControl.touched : false;
  }

  get isIDNumberRequired(): boolean {
    const IDNumberControl = this.ProfileForm.get('IDNumber');
    return IDNumberControl ? IDNumberControl.hasError('required') && IDNumberControl.touched : false;
  }

  get isIDNumberInvalid(): boolean {
    const IDNumberControl = this.ProfileForm.get('IDNumber');
    return IDNumberControl ? IDNumberControl.hasError('pattern') && IDNumberControl.touched : false;
  }

  get isBirthDateRequired(): boolean {
    const BirthDateControl = this.ProfileForm.get('BirthDate');
    return   BirthDateControl ? BirthDateControl.hasError('required') && BirthDateControl.touched : false;
  }

  onSubmit(): void {
    if(this.ProfileForm.valid) {
      isAuthenticated.set(true);
      console.log('Guardar informacion del Perfil', this.ProfileForm.value); 
    }
    else{
      console.log('Formulario vacio/incorrecta complete todos los campos faltantes');
    }
  }
}