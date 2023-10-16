import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { OutputButtonComponent } from './output-button/output-button.component';
import { OutputDisplayComponent } from './output-display/output-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    OutputButtonComponent,
    OutputDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
