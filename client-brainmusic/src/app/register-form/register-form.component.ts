import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmPasswordValidator} from "./confirm-password.validator";

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      country: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]]
    }, {
      validator: ConfirmPasswordValidator.MatchPassword
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    console.log(this.registerForm);
  }
}
