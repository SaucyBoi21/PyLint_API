import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PylintOutput } from './pylint-output';

@Injectable({
  providedIn: 'root'
})
export class OutputService {

  private url = "http://localhost:3000/api"
  //private output$: Observable<PylintOutput> = new Observable()

  constructor(private httpClient:HttpClient) { }

  getPylintOutput(): Observable<PylintOutput>{
    //return "test"
    return this.httpClient.get<PylintOutput>(`${this.url}/test`)
  }
}
