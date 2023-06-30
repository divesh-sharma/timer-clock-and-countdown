import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TimerComponent } from './timer/timer.component';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,TimerComponent ,CountdownComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
