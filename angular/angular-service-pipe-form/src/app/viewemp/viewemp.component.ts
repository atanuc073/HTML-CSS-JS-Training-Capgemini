import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
})
export class ViewempComponent implements OnInit {
  searchstr:string="";
  field:string="";

  constructor(public empservice:EmpService) { }

  ngOnInit() {
  }
  setfield(field:string):void{
    this.field=field;
  }

}
