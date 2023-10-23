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
  output$:any

  constructor(private httpClient: HttpClient) { }

  fileName = ''

  onFileSelected(event:any) {
    const file:File = event.target.files[0]

    if (file) {
      this.fileName = file.name
      const formData = new FormData()
      formData.append("thumbnail", file)
      this.output$ = this.httpClient.post(`/api/upload`, formData)
      this.output$.subscribe()
    }
    
    console.log(this.output$)
    return this.output$
    


    
    
    
  }
}
