import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() registerSubmit = new EventEmitter()

  reactiveForm: FormGroup;
  constructor() {
    this.reactiveForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.minLength(10)]),
      password: new FormControl("",[Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl("",[Validators.required,Validators.minLength(6)]),
      country: new FormControl("",[Validators.required]),
      age: new FormControl("",[Validators.required, Validators.min(18)]),
      gender: new FormControl("",[Validators.required]),
      phone: new FormControl("",[Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    })
  }

  ngOnInit(): void {
  }

  validateRegister(){
    console.log(this.reactiveForm);
    if(this.reactiveForm.valid){
      this.registerSubmit.emit(this.reactiveForm.value)
    }
  }

  get contactFormValue(){
    return this.reactiveForm.controls;
  }
  onPasswordChange() {
    if (this.contactFormValue.confirmPassword.value == this.contactFormValue.password.value) {
      this.contactFormValue.confirmPassword.setErrors(null);
    } else {
      this.contactFormValue.confirmPassword.setErrors({ "mismatch": true });
    }
  }
}
