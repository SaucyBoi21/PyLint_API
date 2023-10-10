import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { OutputService } from '../output.service';
import { Observable } from 'rxjs';
import { PylintOutput } from '../pylint-output';

@Component({
  selector: 'app-output-button',
  templateUrl: './output-button.component.html',
  styleUrls: ['./output-button.component.css']
})
export class OutputButtonComponent {
  readonly TEST_URL = 'http://localhost:3000/api'
  output: Observable<PylintOutput> = new Observable();

  constructor(private outputService: OutputService) {}

  getPylintOutput(): void {
    this.output = this.outputService.getPylintOutput()
  }


}
