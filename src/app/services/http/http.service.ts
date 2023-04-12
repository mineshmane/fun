import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/'
  constructor(private httpClient: HttpClient) { }

  PostService(url: string, reqData: any, token: boolean, httpOptions: any) {

    return this.httpClient.post(this.baseUrl + url, reqData, token && httpOptions)

  }
  GetService() {

  }

  PutService() {

  }

  DeleteService() {

  }
}
