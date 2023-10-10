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

  constructor(private http:HttpClient) { }

  getPylintOutput(): Observable<PylintOutput> {
    return this.http.get<PylintOutput>(`${this.url}/test`)
  }
}
