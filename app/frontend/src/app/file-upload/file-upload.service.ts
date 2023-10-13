import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { OutputMessage } from '../output-message';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private url = 'http://localhost:3000/api'

  constructor(private httpClient: HttpClient) { }

  onFileSelected(event:any) {
    const file:File = event.target.files[0]

    
    const output = this.httpClient.post(`${this.url}/upload`, file)
    console.log(output)
    return output
    
    
  }
}
