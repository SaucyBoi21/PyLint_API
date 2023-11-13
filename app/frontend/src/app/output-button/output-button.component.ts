import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { OutputService } from '../output.service';
import { Observable, Subscription } from 'rxjs';
import { PylintOutput } from '../pylint-output';
import { UserInputComponent } from '../user-input/user-input.component';
import { PylintResponse } from '../pylint-response';
import { FilenameService } from '../filename.service';

@Component({
  selector: 'app-output-button',
  templateUrl: './output-button.component.html',
  styleUrls: ['./output-button.component.css']
})
export class OutputButtonComponent implements OnInit, OnDestroy {
  readonly TEST_URL = 'http://localhost:3000/api'
  filename:string
  subscription: Subscription
  output$: Observable<PylintOutput> = new Observable();
  data$: any

  @ViewChild(UserInputComponent) userInputComponent: UserInputComponent

  constructor(private outputService: OutputService, private name: FilenameService) {}

  ngOnInit(): void {
    this.subscription = this.name.currentFileName.subscribe(
      filename => this.filename = filename
    )
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe
  }


  getPylintOutput(): void {
    this.outputService.getPylintOutput(this.filename).subscribe(
      data => {
        console.log(data.response)
        this.data$ = JSON.parse(data.response)
      }
    )
    
  }



}
