import { Injectable } from '@angular/core';
import { UserInput } from './user-input';

@Injectable({
  providedIn: 'root'
})
export class ReadUserInputService {
  input: any = ""

  constructor() { }

  getInput() {
    return this.input 
  }
}
