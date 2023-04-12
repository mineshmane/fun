import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any
  constructor(private httpService: HttpServiceService) { }

  createNote(reqBody: any) {
    console.log(" login data in user service ",reqBody);
    this.token=localStorage.getItem('jwt-Token')

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token

      
      })
    }
   return this.httpService.PostService('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes', reqBody, httpOptions)


  }

  getAllNotes(){

    console.log(" login data in user service ");
    this.token=localStorage.getItem('jwt-Token')

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token

      
      })
    }
   return this.httpService.GetService('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', httpOptions)



  }
}
