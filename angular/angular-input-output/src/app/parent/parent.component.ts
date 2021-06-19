import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  str:string;
  imagename:string;
  style1={height:'200px'};
  constructor() { }

  ngOnInit() {
  }
  setimage(imagestr:string):void{
    this.imagename=imagestr;
    
  }

}
