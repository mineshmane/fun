import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
token:any
  constructor(private httpService: HttpService) { }

  login(reqData: any) {

console.log(reqData);
this.token=localStorage.getItem('token')

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:this.token
      })
    };
    
  return  this.httpService.PostService('user/login', reqData, true, httpOptions)

  }

  registration() {

  }

  resetpassword() {

  }

}
