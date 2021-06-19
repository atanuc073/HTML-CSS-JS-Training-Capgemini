import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Dept } from '../dept';
import { EmpService } from '../emp.service';
import { Empdto } from '../empdto';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  emp:Empdto= new Empdto();
  dept:string;
  msg:string;
  msgFlag:boolean;
  @ViewChild("frm")
  form: NgForm;
  

  constructor(public empservice:EmpService) { }

  ngOnInit() {
  }
  addEmployee():void{
    this.empservice.addEmployee(this.emp).subscribe(
      data=>{console.log(data);this.msg=data.message;this.form.reset;this.msgFlag=true;},
      error=>{console.log(error);this.msg=error.error.message[0];this.msgFlag=false;}
    );

  }

}
