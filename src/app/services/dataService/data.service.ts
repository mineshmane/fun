import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject([{}]);
  recivedData = this.messageSource.asObservable();

  constructor() { }

  sendData(message: any) {
    this.messageSource.next(message)
  }
}
