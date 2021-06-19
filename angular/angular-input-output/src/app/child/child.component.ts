import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  style1={height:'200px'};
  @Input('iname') 
  strname:string;
  @Input('iname2')
  strimage:string;

  constructor() { }

  ngOnInit() {
  }

}
