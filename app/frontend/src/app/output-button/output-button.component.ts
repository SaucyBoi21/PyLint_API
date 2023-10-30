import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { OutputService } from '../output.service';
import { Observable } from 'rxjs';
import { PylintOutput } from '../pylint-output';
import { UserInputComponent } from '../user-input/user-input.component';

@Component({
  selector: 'app-output-button',
  templateUrl: './output-button.component.html',
  styleUrls: ['./output-button.component.css']
})
export class OutputButtonComponent implements OnInit, AfterViewInit{
  readonly TEST_URL = 'http://localhost:3000/api'
  output$: Observable<PylintOutput> = new Observable();
  //output$: any

  @ViewChild(UserInputComponent) 
  userInputComponent: UserInputComponent


  constructor(private outputService: OutputService) {}

  ngOnInit(): void {
      
  }
  
  filename:string
  ngAfterViewInit(): void {
      this.filename = this.userInputComponent.input
  }

  getPylintOutput(): void {
    this.output$ = this.outputService.getPylintOutput(this.filename)
    console.log(this.filename)
    //console.log(JSON.stringify(this.output$))
  }



}
