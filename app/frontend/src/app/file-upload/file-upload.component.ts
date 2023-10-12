import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FileUploadService } from './file-upload.service';
import { Observable } from 'rxjs';
import { OutputMessage } from '../output-message';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  upload$ : Observable<OutputMessage> = new Observable()

  constructor (private fileUploadService : FileUploadService) {}

  displayOutput(event:Event) : void {
    this.upload$ = this.fileUploadService.onFileSelected(event)
  }

}
