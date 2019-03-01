import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
function comparePassword(c: AbstractControl) {
  const v = c.value;
  return(v.password === v.confirmPassword) ? null : {
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
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required]],
      pwGroup: this.fb.group({
        passWord: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6}$/)]],
        confirmPassword:  ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6}$/)]],
      }, {validators: comparePassword}),
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit() {
    console.log(this.registerForm);
  }
}
