import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Empdto } from '../empdto';

@Component({
  selector: 'app-viewempbyid',
  templateUrl: './viewempbyid.component.html',
  styleUrls: ['./viewempbyid.component.css']
})
export class ViewempbyidComponent implements OnInit {
  emp:Empdto=null;
  eid:number;
  msg:string;

  constructor(public empservice:EmpService) { }

  ngOnInit() {
  }
  viewById():void{
    this.empservice.viewbyemployeeid(this.eid).subscribe(data=>{console.log(data); this.emp=data;this.msg=undefined},
    error=>{console.log(error);this.msg=error.error.message;this.emp=null});

  }
                                                        
                                                       
                                                        
                                                          

  }


