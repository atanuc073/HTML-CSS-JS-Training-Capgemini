import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  str:string='';
  @Output()
  notify:EventEmitter= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  raiseEvent():void{
    this.notify.emit(this.str);
    
  }

}
