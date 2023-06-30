import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
time = new Date().getTime();
  constructor() { }

  ngOnInit() {
    this.getTimer();
  }

  getTimer(){
setInterval(()=>{
  this.time = new Date().getTime();
},1000)
  }



}