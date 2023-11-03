import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { OutputButtonComponent } from './output-button/output-button.component';
import { UserInputComponent } from './user-input/user-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PylintOutputComponent } from './pylint-output/pylint-output.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    OutputButtonComponent,
    UserInputComponent,
    PylintOutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
