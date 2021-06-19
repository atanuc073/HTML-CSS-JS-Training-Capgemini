import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {
  str:String;
  constructor() { }

  ngOnInit() {
  }
  handleEvent($event):void{
    this.str=$event;


  }

}
