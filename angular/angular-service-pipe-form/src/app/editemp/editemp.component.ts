import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { Empdto } from '../empdto';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {
  emp:Empdto;

  constructor(public empservice:EmpService,public route:ActivatedRoute,public router:Router) { 

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      let empid=parseInt(params.get("eid"));
      this.emp=this.empservice.emps.filter(e=>e.empId==empid)[0];
    });
  }
  edit():void{
    this.router.navigateByUrl('/viewemp')
  }

}
