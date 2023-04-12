import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { UserServiceService } from 'src/app/services/DemoServices/userService/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private demoUserService: UserServiceService) { }

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

  loginMethod() {

    console.log(" login bution ghet called ", this.registerForm.value.email);
    console.log(" login bution ghet called ", this.registerForm.value.password);

//json object
    let reqData = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    }
this.demoUserService.userLogin(reqData).subscribe((result:any)=>{
  
  console.log("after api call succesfully got response ",result);
  localStorage.setItem('jwt-Token', result.id)
  
})

    // this.userService.login(data).subscribe((res: any) => {
    //   console.log(res);

    // })



  }


}
