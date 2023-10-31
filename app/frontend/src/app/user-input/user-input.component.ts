import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReadUserInputService } from '../read-user-input.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})

export class UserInputComponent {

  @Output() newUserEvent = new EventEmitter<string>()

  constructor (
    private readUserInputService: ReadUserInputService,
    private formBuilder: FormBuilder
  ) {}

  input = this.readUserInputService.getInput()

  inputForm = this.formBuilder.group({
    input: ''
  })

  sendOutput(output:any) {
    this.newUserEvent.emit(output)
  }

  onSubmit(): void {
    this.input = this.inputForm.value.input
    this.sendOutput(this.input)
    this.inputForm.reset()
  }

}
