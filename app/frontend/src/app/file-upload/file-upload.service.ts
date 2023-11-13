import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilenameService } from '../filename.service';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { OutputMessage } from '../output-message';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService implements OnInit, OnDestroy{
  private url = 'http://localhost:3000/api'
  output$:any

  filename:string
  subscription: Subscription


  constructor(private httpClient: HttpClient, private name: FilenameService) { }

  filename$ = ''

  ngOnInit(): void {
    this.subscription = this.name.currentFileName.subscribe(
      filename => this.filename = filename
    )
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe
  }

  onFileSelected(event:any) {
    const file:File = event.target.files[0]

    if (file) {
      this.filename$ = file.name
      const formData = new FormData()

      this.newFile(this.filename$)
      
      formData.append("recfile",file, file.name)
      this.output$ = this.httpClient.post(`/api/upload`, formData)
      this.output$.subscribe()
    }
    
    return this.output$
  }

  newFile(filename:string) {
    this.name.changeFileName(filename)
  }
}
