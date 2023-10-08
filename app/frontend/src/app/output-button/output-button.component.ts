import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-output-button',
  templateUrl: './output-button.component.html',
  styleUrls: ['./output-button.component.css']
})
export class OutputButtonComponent {
  readonly TEST_URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient) {}

  output: any;

  getPylintOutput() {
    this.output = this.http.get(this.TEST_URL + '/test')
  }
}
