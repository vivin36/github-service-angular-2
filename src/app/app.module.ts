import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { ThrdSampleComponent } from './third-sample/third-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ThrdSampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
