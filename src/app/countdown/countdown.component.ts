import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class CountdownComponent implements OnInit {
  countDown;
  counting = 0;
  min: any = 0;
  sec: any = 0;
  defaultValue = '00:00';
  timerId;
  constructor() {}

  ngOnInit() {
    this.countDown = this.defaultValue;
  }

  startCountDown() {
   this.timerId =  setInterval(() => {
      this.counterStart();
    }, 1000);
  }

  counterStart() {
    this.sec++;
    this.counting++;
    if (this.min < 1 && this.sec > 59) {
      this.min = Math.floor(this.sec / 59);
      this.sec = 0;
    } else if (this.min > 0 && this.sec > 59) {
      this.min++;
      this.sec = 0;
    }
  this.formatTime();
  }

  formatTime(){
    if(this.sec < 10 && this.min <10){
      this.countDown = `0${this.min}:0${this.sec}`;
    }else if(this.sec > 10 && this.min <=10){
      this.countDown = `0${this.min}:${this.sec}`;
    }else if(this.sec < 10 && this.min >=10){
      this.countDown = `${this.min}:0${this.sec}`;
    }else{
      this.countDown = `${this.min}:${this.sec}`;
    }
  }

  stopCountdown(){
    clearInterval(this.timerId);
    this.countDown = this.defaultValue;
    this.min=0;
    this.sec=0;
  }
}
