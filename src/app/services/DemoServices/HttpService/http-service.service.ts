import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpCliente:HttpClient) { }

  //post put get delete



  PostService(url: string, body: any, options:any){
    console.log(" login data in http service ",body);

   return this.httpCliente.post(url, body, options)

  }

  GetService(url: string, options:any){
    return this.httpCliente.get(url, options)

  }

  PutService(){

  }

  DeleteService(){

  }




}
