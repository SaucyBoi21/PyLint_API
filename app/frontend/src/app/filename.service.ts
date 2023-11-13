import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilenameService {

  private messageSource = new BehaviorSubject<string>("default message")
  currentFileName = this.messageSource.asObservable()

  constructor() { }

  changeFileName(filename: string) {
    this.messageSource.next(filename)
  }
}
