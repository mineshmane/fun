import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  // componenet life cycle hook
  // 8 component life hook

  //ngOninit baha - this will only one once loaded this component

  ngOnInit(): void {
    console.log(" login component is loaded ");
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

  signup(){
    
  }
}
