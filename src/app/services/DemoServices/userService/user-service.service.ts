import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService: HttpServiceService) { }

  userLogin(reqBody: any) {
    console.log(" login data in user service ",reqBody);
    

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
   return this.httpService.PostService('http://fundoonotes.incubation.bridgelabz.com/api/user/login', reqBody, httpOptions)

    // post

  }

  userSignup(reqBody:any) {
    //POST /user/userSignUp
    console.log(" login data in user service ",reqBody);
    

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
   return this.httpService.PostService('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', reqBody, httpOptions)

  }

  forgetPassword() {

  }

  adminLogin() {
    // post
  }
}
