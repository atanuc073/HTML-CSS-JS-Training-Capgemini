import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { Empdto } from '../empdto';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css'],
  // providers: [EmpService]
  // providing service at component level
})
export class AddempComponent implements OnInit {
  emp:Empdto=new Empdto();
  @ViewChild("frm")
  private form:NgForm;
  msg:string="";

  constructor(public empservice:EmpService,public router:Router) { }

  ngOnInit() {
  }
  add():void{
    this.empservice.addEmployee(this.emp);
    // this.router.navigateByUrl("/viewemp")
    this.msg="Successfully Added";
    this.emp=new Empdto();
    this.form.reset();

  }

}
